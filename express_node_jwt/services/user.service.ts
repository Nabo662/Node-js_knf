import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { code, msg } from '../helpers/constants';
import { isEmpty } from '../helpers/validation';
import { models } from '../db/db';
import { User } from '../db/interface/user.interface';
import { createToken } from '../helpers/jwt';

const { UserDoc } = models;

async function authenticateUser(email: string, password: string): Promise<User> {
  const user: User = await UserDoc.findOne({ email, deleted: false });

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
  }
  return null;
}
export async function add(request: Request, response: Response): Promise<Response> {
  try {
    console.log(request.body)
    let hash = bcrypt.hashSync(request.body.password, 10);
    request.body.password = hash;
    const data = new UserDoc(request.body);
    await data.save();
    return response.status(200).send({ data: data });
  } catch (error) {
    console.log(error)
    return response.status(code.SERVER_ERROR).send({ message: msg.unknownError });
  }
}
export async function login(request: Request, response: Response): Promise<Response> {
  try {
    if (isEmpty(request.body.email)) {
      return response.status(code.BAD_REQUEST).send({ message: msg.emailRequired });
    }

    if (isEmpty(request.body.password)) {
      return response.status(code.BAD_REQUEST).send({ message: msg.passwordRequired });
    }

    const user = await authenticateUser(request.body.email, request.body.password);

    if (user) {
      if (!user.active) {
        return response.status(code.UNAUTHORIZED).send({ message: msg.inActiveUser });
      }

      const token: string = createToken(user);
      return response.status(code.SUCCESS).send({ token });
    }
    return response.status(code.UNAUTHORIZED).send({ message: msg.incorrectCredentials });
  } catch (error) {
    return response.status(code.SERVER_ERROR).send({ message: msg.unknownError });
  }
}
export async function get(request: Request, response: Response): Promise<Response> {
  try {
    console.log(request.body)

    const data = await UserDoc.find();

    return response.status(200).send({ data: data });
  } catch (error) {
    console.log(error)
    return response.status(code.SERVER_ERROR).send({ message: msg.unknownError });
  }
}