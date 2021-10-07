# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

## Test locally

```shell
$ docker-compose up
$ aws dynamodb create-table \
    --endpoint-url http://localhost:8000 \
    --table-name landingpages \
    --attribute-definitions \
        AttributeName=pk,AttributeType=S \
        AttributeName=sk,AttributeType=S \
    --key-schema \
        AttributeName=pk,KeyType=HASH \
        AttributeName=sk,KeyType=RANGE \
    --provisioned-throughput \
        ReadCapacityUnits=5,WriteCapacityUnits=5
$ sam local invoke createEventB5E2789C --env-vars env.json -e event.json
$ sam local start-api --env-vars env.json
$ curl http://127.0.0.1:3000/api/events/<id>
$ curl -X POST -H "Content-Type: application/json" -d "@data.json" http://127.0.0.1:3000/api/events
```
