import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

import { IUser } from "../modules/User/UserModel";

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
