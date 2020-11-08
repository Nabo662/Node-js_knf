import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import smsRoute from './routes/sms.routes';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/smsRoute', smsRoute);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 3000!');
});
