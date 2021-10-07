import json
import logging
import os
from typing import Optional

import boto3
from boto3.dynamodb.conditions import Key
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource("dynamodb", endpoint_url=os.environ["ENDPOINT_URL"])
table = dynamodb.Table(os.environ["TABLE_NAME"])


def get_event(user_id: str, date: Optional[str] = None):
    if date:
        return table.query(
            KeyConditionExpression=Key("pk").eq("user_id") & Key("sk").begins_with(date)
        )

    return table.query(KeyConditionExpression=Key("pk").eq(user_id))


def handler(event, context):
    # logging.info(f"{event=}")
    user_id = event["pathParameters"]["id"]
    date = None
    if event["body"]:
        date = json.loads(event["body"]).get("date")

    logging.info("user_id: %s, date: %s", user_id, date)

    try:
        response = get_event(user_id, date)
        return {
            "statusCode": 200,
            "headers": {"content-type": "application/json"},
            "body": json.dumps(response),
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
