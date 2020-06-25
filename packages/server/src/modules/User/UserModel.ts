import mongoose, { Schema, Document, Model } from "mongoose";

import { authenticate, encryptPassword, hashPassword } from "../../utils/auth";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      index: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      hidden: true,
      required: true,
      minlength: 6,
    },
    notifications: {
      weekly: {
        type: Boolean,
        required: false,
        hidden: false,
      },
      news: {
        type: Boolean,
        required: false,
        hidden: false,
      },
    },
  },
  {
    timestamps: true,
    collection: "User",
  },
);

export interface IUser extends Document {
  email: string;
  password: string;
  notifications: {
    weekly: boolean;
    news: boolean;
  };
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => Promise<string>;
}

UserSchema.methods = {
  authenticate,
  encryptPassword,
};

UserSchema.pre<IUser>("save", hashPassword);

// This line is only to fix "Cannot overwrite `User` model once compiled." error.
// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
mongoose.models = {};

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
