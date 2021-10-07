import json
import logging
import os
from datetime import datetime
from urllib.parse import parse_qs, urlparse

import boto3
from botocore.exceptions import ClientError

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource("dynamodb", endpoint_url=os.environ["ENDPOINT_URL"])
table = dynamodb.Table(os.environ["TABLE_NAME"])

client = boto3.client("lambda")


def send_email(user_id: str, recipient: str):
    return client.invoke(
        FunctionName=os.environ["SEND_EMAIL_FUNCTION_NAME"],
        InvocationType="Event",
        Payload=json.dumps({"recipient": recipient, "userId": user_id}),
    )


def put_event(user_id: str, location: str, event: str, action: str, content: str = ""):
    url = urlparse(location)
    qs = {key: ",".join(value) for key, value in parse_qs(url.query).items()}

    return table.put_item(
        Item={
            "pk": user_id,
            "sk": datetime.utcnow().isoformat(),
            "page": url.hostname + url.path,
            "event": event,
            "action": action,
            "content": content,
            **qs,
        }
    )


def handler(event, context):
    # logging.info(f"{event=}")
    item = json.loads(event["body"])
    logging.info(f"{item=}")

    # email event
    if item["event"].endswith("_email") and item["action"] == "submitted":
        logging.info(f"send_email: {item['userId']}, {item['content']}")
        response = send_email(item["userId"], item["content"])
        logging.info(f"send_email: {response}")

    try:
        response = put_event(
            item["userId"],
            item["location"],
            item["event"],
            item["action"],
            item["content"],
        )

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
