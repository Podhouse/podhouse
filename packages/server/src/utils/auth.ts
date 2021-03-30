import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Types } from "mongoose";

import UserModel, { IUser } from "../modules/User/UserModel";

dotenv.config();

export async function getUser(token: string) {
  if (!token) return { user: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), process.env.JWT_SECRET);

    const user = await UserModel.findOne({
      _id: (decodedToken as { id: string }).id,
    });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
}

export function generateToken(_id: string | Types.ObjectId) {
  return `JWT ${jwt.sign({ id: _id }, process.env.JWT_SECRET)}`;
}

export function authenticate(this: IUser, plainTextPassword: string) {
  return bcrypt.compare(plainTextPassword, this.password);
}
