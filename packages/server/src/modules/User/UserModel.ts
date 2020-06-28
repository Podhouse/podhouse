import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcrypt";

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
    providers: [
      {
        id: {
          type: String,
        },
        provider: {
          type: String,
        },
      },
    ],
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
  providers: Array<{
    id: string;
    provider: string;
  }>;
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => Promise<string>;
}

UserSchema.methods = {
  authenticate: function (this: IUser, plainTextPassword: string) {
    return bcrypt.compare(plainTextPassword, this.password);
  },
};

UserSchema.pre<IUser>("save", function (next) {
  if (!this.isModified("password")) return next();
  if (!this.password) return next();
  return bcrypt.hash(this.password, 8).then((hash: string) => {
    this.password = hash;
    next();
  });
});

// This line is only to fix "Cannot overwrite `User` model once compiled." error.
// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
mongoose.models = {};

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
