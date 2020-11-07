import mongoose from 'mongoose';
import collections from '../collections';
import { User } from '../interface/user.interface';

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    privilages: [
      { type: Number },
    ],
    createdTime: {
      type: Date,
      default: Date.now(),
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
);

schema.set('toJSON', { virtuals: true });

export = mongoose.model<User>(collections.users, schema);
