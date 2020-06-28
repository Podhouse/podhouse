import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { IUser } from "../modules/User/UserModel";
import { User } from "../models";

dotenv.config();

export async function getUser(token: string) {
  if (!token) return { user: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), process.env.JWT_SECRET);

    const user = await User.findOne({
      _id: (decodedToken as { id: string }).id,
    });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

export function generateToken(user: { _id: string }) {
  return `JWT ${jwt.sign({ id: user._id }, process.env.JWT_SECRET)}`;
}

export function authenticate(this: IUser, plainTextPassword: string) {
  return bcrypt.compare(plainTextPassword, this.password);
}
