const express = require('express');
const Twilio = require('twilio');
const dotEnv = require('dotenv');

dotEnv.config();
const router = express.Router();
const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

router.post('/', (req, res) => {
  client.messages.create({
    body: 'Hello from Node',
    to: process.env.TEST_NUMBER,
    from: process.env.TWILIO_NUMBER,
  })
    .then(message => res.send(message));
});

module.exports = { router };
