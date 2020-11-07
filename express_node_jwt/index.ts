import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoute from './routes/user.routes';


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/user', userRoute);
app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log('App listening on port 8000!');
});
