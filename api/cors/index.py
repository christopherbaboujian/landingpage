import os
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

ALLOWED_ORIGINS = os.environ["ALLOWED_ORIGINS"].split(",")


def handler(event, context):
    logging.info(f"{event=}")
    origin = event["headers"]["origin"]
    logging.info(f"{origin=}")
    if origin not in ALLOWED_ORIGINS:
        origin = ALLOWED_ORIGINS[0]

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Methods": "OPTIONS,GET,POST,DELETE",
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Origin": origin,
        },
    }
