const express = require('express');
const Twilio = require('twilio');
const dotEnv = require('dotenv');

dotEnv.config();
const router = express.Router();
const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const client = new Twilio(accountSid, authToken);

const createApptMsg = (doctorName, patientName, date, time, customMsg) => (
  `Hello ${patientName},\nThis is Dr. ${doctorName}'s office reminding you about your appointment on ${date} at ${time}.${customMsg ? `\nNOTE: ${customMsg}` : ''}`
);

router.post('/', (req, res) => {
  const {
    phoneNumber, doctorName, patientName, date, time, customMsg,
  } = req.body;
  const apptMessage = createApptMsg(doctorName, patientName, date, time, customMsg);

  client.messages.create({
    body: apptMessage,
    to: phoneNumber,
    from: process.env.TWILIO_NUMBER,
  })
    .then(message => res.send(message));
});

module.exports = { router, createApptMsg };
