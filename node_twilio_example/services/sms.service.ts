import { Request, Response } from 'express';

var TWILIO_ACCOUNT_SID = 'your TWILIO_ACCOUNT_SID',
  TWILIO_AUTH_TOKEN = 'your TWILIO_AUTH_TOKEN',
  TWILIO_PHONE_NUMBER = 'TWILIO_PHONE_NUMBER';
const twilio = require('twilio');
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export async function sendSms(request: Request, response: Response) {
  // Use the REST client to send a text message
  client.messages.create({
    to: request.body.phoneNumber,
    from: TWILIO_PHONE_NUMBER,
    body: request.body.message
  }).then(function () {
    // When we get a response from Twilio, respond to the HTTP POST request
    response.send('Message is inbound!');
  });
}


export async function call(request: Request, response: Response) {
  // Use the REST client to send a text message
  client.calls.create({
  to: request.body.phoneNumber,
  from: TWILIO_PHONE_NUMBER,
  url: 'http://demo.twilio.com/docs/voice.xml'
  }).then(function() {
  response.send('Call incoming!');
  });
}
