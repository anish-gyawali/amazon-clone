const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const stripe = require("stripe")(
  "sk_test_51HyMRCHr1msutjBNDo6prHlZaQcMtHGyeow7Dp71nXtQCOoeO2Aq16HWIYpSCtZoR6ZeTBhTOihU3l1gXHSd6v3s00lIK3Av5o"
);

//api

//api-config
const app = express();

//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, //subunits of currency
    currency: "usd",
  });

  //Ok-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//- listen command
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-c661f/us-central1/api
