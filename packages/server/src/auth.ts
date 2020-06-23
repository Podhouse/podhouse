import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

import { User } from './models';

dotenv.config();

type UserType = {
  _id: string,
};

export async function getUser(token: string) {
  if (!token) return { user: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), process.env.JWT_SECRET);

    const user = await User.findOne({ _id: (decodedToken as { id: string }).id });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

export function generateToken(user: UserType) {
  return `JWT ${jwt.sign({ id: user._id }, process.env.JWT_SECRET)}`;
}
