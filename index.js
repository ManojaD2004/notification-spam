const express = require("express");
const app = express();
const webpush = require("web-push");
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));

const PUB_KEYS =
  "BBU1t9eB2t85ZBlOckZv_rwrMzZojfKiAwlFGfglpTVIV9ZTIpDytu8zZuDZhVUXv0BVuEg-MXzhi4S4K2SaMes";
const PRI_KEYS = "37CKS1eYPjQWehqT-CC-v5rxA7r4IaqnpioK0vsD2p8";

// 'Voluntary Application Server Identification' for Web Push - VAPID
webpush.setVapidDetails("mailto:test@test.com", PUB_KEYS, PRI_KEYS);

const sub1 = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dBVDEksmnI8:APA91bElx5Er-DMAEG9wrk_3EiosZsqQPB-20cY835nqAsdIWhty6OUHWMUqHvnUWUdvqDBGmVAvf1I7FvXALJr55gjLv7_e5-72w_I8qgrW2fBADUJIfuCZXXxhvfcuuXwNPymoSCbg",
  expirationTime: null,
  keys: {
    p256dh:
      "BIaqQowpq-1SL8TSpHY0zqkvcTsOP_26Y-lN3g5jup7xRVe0scZTqkX-Pe6WNWUKs7BTyKfU0mC9ZYBl4pUcJfk",
    auth: "TfSCA3E1_jOxRniRRbvYMg",
  },
};

const sub2 = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eq2CglYH15M:APA91bEMKY_WtfKwNschL8fpfDkUAhaRzUcTUzwcBbJte6eWQ6Fu2JFcGjQj4Bni_wSvcajktqJkc8PktHzi8u6F4jE4G7G5NeCCwagVYdcrnDTNZiTgrvD8AvA1DQZx8B7utT_wV1RS",
  expirationTime: null,
  keys: {
    p256dh:
      "BBF2KKixFzi5tgX-dwPuLc2XNsX_sSYQbThQrtno4J6sQ4KxXX6PswNAd-fVIb4RrZenDbBs9zRd33QH9IlbB2M",
    auth: "Kcwy26dygfCGFYlP4jHPjA",
  },
};

const sub3 = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dMjjQKNVxuo:APA91bEWWM5SbhaJf80SzWVxbv_hyML3Pea9dZm_89pWYcsVkpwHunZOSs9mrcxELt11BIx_uQPTUfqh9f3qHhEb89tBj8J-Y5Ow_2JoN5JDVylghhcf5HvPL0yokr8NcW8dsQmYzIt-",
  expirationTime: null,
  keys: {
    p256dh:
      "BP6gQ6OYtuCVfvK_3sjLO1tGnr2WInmvRXt6a1ebg6wSe-BxxFVMcSWW6QwanplnqmNhNDXpg-TJ3kk5MLj-59A",
    auth: "-mruRzXvg73OHh49Bc2bLw",
  },
};

const sub4 = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ddhtZXEV3OU:APA91bHQTluNqjQMf-mr6yoOCl58NKjsetv4JvKhNtWxFv0Axub2eH842ZMjhIgCmiO_7a-UyWEbEyBNaaOMEH5TGbzG5K3yowbalx2LFyZjh_OeVl8zvZL7H_JY08XtCWg8ydsu45kM",
  expirationTime: null,
  keys: {
    p256dh:
      "BCR21DfXSr9wp_gxI7zTpbWOp4OW1Ah-A1MmVkhSdXAxTRJZCktMAK333_tbxs-FGjPhkXGzwD-DFdqnc7nrSBk",
    auth: "WaJZv1A8_blts-M35hdyGA",
  },
};

app.post("/subscribe", (req, res) => {
  const subscription = sub2;
  console.log(subscription);
  res.status(201).json({});
  console.log("Hi");

  // Payload
  const payload = JSON.stringify({
    title: "Hello Aditya",
    des: "Where are you?",
  });

  webpush
    .sendNotification(subscription, payload)
    .catch((error) => console.log(error));
});

app.listen(9000, () => console.log("Listening to PORT 9000"));
