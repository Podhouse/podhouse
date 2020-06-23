import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

import UserModel, { IUser } from "../modules/User/UserModel";

export function hashPassword(this: IUser, next) {
  if (!this.isModified("password")) return next();
  if (!this.password) return next();
  return this.encryptPassword(this.password)
    .then((hash: string) => {
      this.password = hash;
      next();
    })
    .catch((err: Error) => next(err));
}

export function authenticate(this: IUser, plainTextPassword: string) {
  return compare(plainTextPassword, this.password);
}

export function encryptPassword(password: string) {
  return hash(password, 8);
}

export const generateToken = (user: IUser) =>
  `JWT ${sign({ id: user._id }, process.env.JWT_SECRET)}`;

export async function getUser(token: string) {
  if (!token) return { user: null };

  try {
    const decodedToken = verify(token.substring(4), process.env.JWT_SECRET);

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
