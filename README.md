# WebPush testing notifications

This server was created to test [web-push](https://developer.mozilla.org/en-US/docs/Web/API/PushManager)

## Instructions

Define your environment variables and run `npm dev`

## Testing the notification send
Run the following curl replacing the endpoint, auth and p256dh keys according to the device that was registered:

```
curl 'http://localhost:3333/notification/push/send' \
  -H '___internal-request-id: fde86566-e417-4d28-83c2-b584a7a66fd8' \
  -H 'sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"' \
  -H 'content-type: application/json' \
  -H 'Referer;' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw $'{\n    "endpoint": "<ENDPOINT>",\n    "keys": {\n        "auth": "<AUTH_KEY>",\n        "p256dh": "<P256DH_KEY>"\n    }\n}\n' \
  --compressed
```