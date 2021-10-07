import {
  AllowedMethods,
  CachePolicy,
  CacheHeaderBehavior,
  Distribution,
  ViewerProtocolPolicy,
} from '@aws-cdk/aws-cloudfront';
import { HttpOrigin, S3Origin } from '@aws-cdk/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from '@aws-cdk/aws-route53';
import { Bucket } from '@aws-cdk/aws-s3';
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment';
import { DnsValidatedCertificate } from '@aws-cdk/aws-certificatemanager';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets/lib';
import { CfnOutput, Construct, RemovalPolicy, SecretValue, Stack, StackProps } from '@aws-cdk/core';

interface StaticSiteProps extends StackProps {
  api?: { domain: string; stage: string };
  domainName: string;
}

/**
 * Static site infrastructure, which` deploys site content to an S3 bucket.
 *
 * The site redirects from HTTP to HTTPS, using a CloudFront distribution,
 * Route53 alias record, and ACM certificate.
 */
export class StaticSiteStack extends Stack {
  constructor(parent: Construct, name: string, props: StaticSiteProps) {
    super(parent, name, props);

    const { api, domainName } = props;

    const zone = HostedZone.fromLookup(this, 'Zone', { domainName });
    new CfnOutput(this, 'Site', { value: 'https://' + domainName });

    // Content bucket
    const siteBucket = new Bucket(this, 'SiteBucket', {
      bucketName: domainName,
      removalPolicy: RemovalPolicy.RETAIN,
    });
    new CfnOutput(this, 'Bucket', { value: siteBucket.bucketName });

    // TLS certificate
    const certificate = new DnsValidatedCertificate(this, 'SiteCertificate', {
      domainName,
      hostedZone: zone,
      region: 'us-east-1', // Cloudfront only checks this region for certificates.
    });
    new CfnOutput(this, 'CertificateArn', { value: certificate.certificateArn });

    // CloudFront distribution that provides HTTPS
    const distribution = new Distribution(this, 'SiteDistribution', {
      certificate: certificate,
      domainNames: [domainName],
      defaultRootObject: 'index.html',
      defaultBehavior: {
        origin: new S3Origin(siteBucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404.html',
        },
      ],
    });
    new CfnOutput(this, 'DistributionId', { value: distribution.distributionId });

    // API origin
    if (api) {
      distribution.addBehavior(
        '/api/*',
        new HttpOrigin(api.domain, {
          originPath: `/${api.stage}`,
          customHeaders: {
            'X-Api-Key': SecretValue.secretsManager('landing-pages-api-key').toString(),
          },
        }),
        {
          allowedMethods: AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          cachePolicy: new CachePolicy(this, 'LandingPagesCachePolicy', {
            comment: 'Whitelist Authorization and Origin Headers',
            headerBehavior: CacheHeaderBehavior.allowList('Authorization', 'Origin'),
          }),
        }
      );
    }

    // Route53 alias record for the CloudFront distribution
    new ARecord(this, 'SiteAliasRecord', {
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });

    // Deploy site contents to S3 bucket
    new BucketDeployment(this, 'DeployWithInvalidation', {
      sources: [Source.asset('../out')],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });
  }
}
