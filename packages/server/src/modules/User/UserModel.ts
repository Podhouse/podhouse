import mongoose, { Schema, Document, Model, model } from "mongoose";

import { hashPassword, authenticate, encryptPassword } from "../../common/auth";

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
    },
    subscriptions: [
      {
        name: {
          type: String,
          trim: true,
          lowercase: true,
        },
        feed: {
          type: String,
          trim: true,
          lowercase: true,
        },
        avatar: {
          type: String,
          trim: true,
          lowercase: true,
        },
      },
    ],
    notifications: {
      weekly: {
        type: Boolean,
        default: false,
      },
      news: {
        type: Boolean,
        default: false,
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
  subscriptions: Array<{
    name: string;
    feed: string;
    avatar: string;
  }>;
  notifications: {
    weekly: boolean;
    news: boolean;
  };
  authenticate: (password: string) => boolean;
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

const UserModel: Model<IUser> = model("User", UserSchema);

export default UserModel;
