import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import {
  secret, code, msg, expiryTime,
} from './constants';
import { models } from '../db/db';
import { User } from '../db/interface/user.interface';

const { UserDoc } = models;

export type AuthUser = {
  uid: string;
  email: string;
  privilages: Array<string>;
  expiryTime: number;
}

export interface UserRequest extends Request {
  user: AuthUser;
}

export function createToken(user: User): string {
  const token = jwt.sign({

    uid: user.id,
    privilages: user.privilages,
    email: user.email,
    expiryTime: Date.now() + expiryTime,
  }, secret);

  return token;
}

export function authenticate(
  req: UserRequest,
  res: Response,
  next: NextFunction,
): Response | void {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    return jwt.verify(token, secret, async (err: Error, user: AuthUser) => {
      if (err) {
        return res.status(code.FORBIDDEN).send({ message: msg.forbidden });
      }

      const userDetails = await UserDoc.findById(user.uid);

      if (userDetails && userDetails.active
        && !userDetails.deleted && Date.now() <= user.expiryTime) {
        req.user = user;
        return next();
      }

      return res.status(code.FORBIDDEN).send({ message: msg.forbidden });
    });
  }
  return res.status(code.FORBIDDEN).send({ message: msg.forbidden });
}
