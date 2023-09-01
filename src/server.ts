import express from 'express';
import cors from 'cors';
import WebPush from 'web-push';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// WebPush

// console.log(WebPush.generateVAPIDKeys());

WebPush.setVapidDetails(process.env.VAPID_DETAILS_URL, process.env.PUBLIC_KEY, process.env.PRIVATE_KEY);

// Routes

interface ISubscription {
    endpoint: string;
    keys: {
      p256dh: string;
      auth: string;
    };
}

app.post('/notification/push/send', async (request, response) => {
  const subscription = request.body as ISubscription;
  const date = new Date()

  console.log(request.body)

  // Custom notification data for internal purposes
  // FE gets this data and manually creates the notification
  WebPush.sendNotification(
    subscription,
    JSON.stringify({
        displayAt: date.getMilliseconds(),
        prospectInfo: '1234984',
        routeId: '123',
        timeout: '60',
        tenantId: 'floating.apps',
    }),
  );

  return response.sendStatus(201);
});

app.listen(3333, () => console.log('SERVER IS RUNNING AT :3333'));