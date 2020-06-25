import bcrypt from "bcrypt";

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
  return bcrypt.compare(plainTextPassword, this.password);
}

export function encryptPassword(password: string) {
  return bcrypt.hash(password, 8);
}
