import mongoose = require('mongoose');
import UserDoc = require('./models/user.model')

export const connectionString = 'mongodb://localhost/app_db';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export const models = { UserDoc };
