import json
import logging
import os

import boto3
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource("dynamodb", endpoint_url=os.environ["ENDPOINT_URL"])
table = dynamodb.Table(os.environ["TABLE_NAME"])


def batch_delete(user_id: str):
    response = table.query(KeyConditionExpression=Key("pk").eq(user_id))
    with table.batch_writer() as batch:
        for item in response["Items"]:
            batch.delete_item(Key={"pk": item["pk"], "sk": item["sk"]})


def handler(event, context):
    # logging.info(f"{event=}")
    user_id = event["pathParameters"]["id"]
    logging.info(f"{user_id=}")

    try:
        batch_delete(user_id)
        return {
            "statusCode": 200,
            "headers": {"content-type": "application/json"},
        }
    except ClientError as e:
        if e.response["Error"]["Code"] == "InternalError":
            error = {
                "code": e.response["ResponseMetadata"]["HTTPStatusCode"],
                "message": e.response["Error"]["Message"],
                "request_id": e.response["ResponseMetadata"]["RequestId"],
            }
            logger.error("Error: %s", json.dumps(error))

            return {
                "statusCode": error["code"],
                "headers": {"content-type": "application/json"},
                "body": json.dumps(error),
            }
        else:
            raise e
