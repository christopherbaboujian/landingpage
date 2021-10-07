import json
import logging
from urllib.parse import urlencode

import boto3
from botocore.exceptions import ClientError

client = boto3.client("ses", region_name="eu-west-1")

CHARSET = "UTF-8"
SENDER = "Lean Toolkit Pages <no-reply@leantoolkitpages.com>"
SUBJECT = "Email confirmation"
BODY_TEXT = (
    "Welcome\r\n"
    "Thank you for your interest. This is the confirmation that you received your email.\n\n"
    "We will contact you when will we look for testers in your area.\n\n"
    "Thank you,\n"
    "Team Lean Toolkit\n\n"
    "Note: if at any point you want to delete your email address, click: {data_url}"
)
BODY_HTML = """<html>
<head></head>
<body>
  <h1>Welcome</h1>
  <p>Thank you for your interest. This is the confirmation that you received your email.</p>
  <p>We will contact you when will we look for testers in your area.</p>
  <p>Thank you,<br>Team Lean Toolkit</p>
  <p>Note: if at any point you want to delete your email address, <a href='{data_url}'>click here</a></p>
</body>
</html>
"""


def handler(event, context):
    logging.info("event: %s", event)

    recipient = event["recipient"]
    user_id = event["userId"]

    data_url = f"https://leantoolkitpages.com/data.html?{urlencode({'id': user_id})}"

    body_text = BODY_TEXT.format(data_url=data_url)
    body_html = BODY_HTML.format(data_url=data_url)

    response = client.send_email(
        Destination={"ToAddresses": [recipient]},
        Message={
            "Body": {
                "Html": {
                    "Charset": CHARSET,
                    "Data": body_html,
                },
                "Text": {
                    "Charset": CHARSET,
                    "Data": body_text,
                },
            },
            "Subject": {
                "Charset": CHARSET,
                "Data": SUBJECT,
            },
        },
        Source=SENDER,
    )

    return {
        "statusCode": 200,
        "body": json.dumps(response),
    }
