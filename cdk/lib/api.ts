import { EndpointType, LambdaIntegration, RestApi } from '@aws-cdk/aws-apigateway';
import { AttributeType, Table } from '@aws-cdk/aws-dynamodb';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import { CfnIdentityPool, CfnIdentityPoolRoleAttachment } from '@aws-cdk/aws-cognito';
import { Effect, FederatedPrincipal, PolicyStatement, Role } from '@aws-cdk/aws-iam';
import { CfnOutput, Construct, RemovalPolicy, Stack, StackProps } from '@aws-cdk/core';

export interface ApiProps extends StackProps {
  allowedOrigins: string;
}

/**
 * Serverless API with API Gateway, Lambdas and DynamoDB.
 *
 * Rest API Gateway with CORS enabled, pointing to Lambdas
 * executing operations on a single DynamoDB table.
 */
export class ApiStack extends Stack {
  constructor(parent: Construct, name: string, props: ApiProps) {
    super(parent, name);

    const { allowedOrigins } = props;

    // DynamoDB table
    const dynamoTable = new Table(this, 'LandingPages', {
      partitionKey: { name: 'pk', type: AttributeType.STRING },
      sortKey: { name: 'sk', type: AttributeType.STRING },
      tableName: 'landingpages',
      removalPolicy: RemovalPolicy.RETAIN,
    });

    // Lambda Functions

    const corsLambda = new Function(this, 'CORS', {
      code: Code.fromAsset('../api/cors'),
      handler: 'index.handler',
      runtime: Runtime.PYTHON_3_8,
      environment: {
        ALLOWED_ORIGINS: allowedOrigins,
      },
    });

    const sendEmailLambda = new Function(this, 'sendEmail', {
      code: Code.fromAsset('../api/send_email'),
      handler: 'index.handler',
      runtime: Runtime.PYTHON_3_8,
    });
    sendEmailLambda.role?.addToPrincipalPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['ses:SendEmail'],
        resources: ['*'],
      })
    );

    const createEventLambda = new Function(this, 'createEvent', {
      code: Code.fromAsset('../api/events/create'),
      handler: 'index.handler',
      runtime: Runtime.PYTHON_3_8,
      environment: {
        ENDPOINT_URL: `https://dynamodb.${Stack.of(this).region}.amazonaws.com`,
        TABLE_NAME: dynamoTable.tableName,
        SEND_EMAIL_FUNCTION_NAME: sendEmailLambda.functionName,
      },
    });
    createEventLambda.addToRolePolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['lambda:InvokeFunction'],
        resources: [sendEmailLambda.functionArn],
      })
    );

    const getEventLambda = new Function(this, 'getEvent', {
      code: Code.fromAsset('../api/events/get'),
      handler: 'index.handler',
      runtime: Runtime.PYTHON_3_8,
      environment: {
        ENDPOINT_URL: `https://dynamodb.${Stack.of(this).region}.amazonaws.com`,
        TABLE_NAME: dynamoTable.tableName,
      },
    });

    const deleteEventLambda = new Function(this, 'deleteEvent', {
      code: Code.fromAsset('../api/events/delete'),
      handler: 'index.handler',
      runtime: Runtime.PYTHON_3_8,
      environment: {
        ENDPOINT_URL: `https://dynamodb.${Stack.of(this).region}.amazonaws.com`,
        TABLE_NAME: dynamoTable.tableName,
      },
    });

    dynamoTable.grantReadWriteData(createEventLambda);
    dynamoTable.grantReadData(getEventLambda);
    dynamoTable.grantWriteData(deleteEventLambda);

    // Rest API Gateway
    const api = new RestApi(this, 'RestApi', {
      endpointConfiguration: { types: [EndpointType.REGIONAL] },
    });
    new CfnOutput(this, 'ApiDomain', {
      value: `${api.restApiId}.execute-api.${Stack.of(this).region}.amazonaws.com`,
      exportName: 'ApiDomain',
    });
    new CfnOutput(this, 'ApiStage', {
      value: api.deploymentStage.stageName,
      exportName: 'ApiStage',
    });

    // API Key
    const key = api.addApiKey('ApiKey');
    new CfnOutput(this, 'ApiKeyId', { value: key.keyId });

    // Usage plan
    const plan = api.addUsagePlan('FullAccess', { apiKey: key });
    plan.addApiStage({ stage: api.deploymentStage });

    const root = api.root.addResource('api');
    const corsIntegration = new LambdaIntegration(corsLambda);

    // /events
    const events = root.addResource('events');
    events.addMethod('OPTIONS', corsIntegration);

    const createEventIntegration = new LambdaIntegration(createEventLambda);
    events.addMethod('POST', createEventIntegration, { apiKeyRequired: true });

    // /events/<id>
    const event = events.addResource('{id}');
    event.addMethod('OPTIONS', corsIntegration);

    const getEventIntegration = new LambdaIntegration(getEventLambda);
    event.addMethod('GET', getEventIntegration, { apiKeyRequired: true });

    const deleteEventIntegration = new LambdaIntegration(deleteEventLambda);
    event.addMethod('DELETE', deleteEventIntegration, { apiKeyRequired: true });

    // Cognito Identity Pool
    const identityPool = new CfnIdentityPool(this, 'LeanToolKitPagesIdentityPool', {
      allowUnauthenticatedIdentities: true,
    });
    new CfnOutput(this, 'IdentityPoolRef', { value: identityPool.ref });

    // Cognito Unauthenticated Role
    const unauthenticatedRole = new Role(this, 'CognitoUnauthenticatedRole', {
      assumedBy: new FederatedPrincipal(
        'cognito-identity.amazonaws.com',
        {
          StringEquals: { 'cognito-identity.amazonaws.com:aud': identityPool.ref },
          'ForAnyValue:StringLike': { 'cognito-identity.amazonaws.com:amr': 'unauthenticated' },
        },
        'sts:AssumeRoleWithWebIdentity'
      ),
    });
    unauthenticatedRole.addToPolicy(
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: ['mobileanalytics:PutEvents', 'cognito-sync:*'],
        resources: ['*'],
      })
    );
    new CfnOutput(this, 'CognitoUnauthenticatedRoleArn', { value: unauthenticatedRole.roleArn });

    new CfnIdentityPoolRoleAttachment(this, 'IdentityPoolRoleAttachment', {
      identityPoolId: identityPool.ref,
      roles: { unauthenticated: unauthenticatedRole.roleArn },
    });
  }
}
