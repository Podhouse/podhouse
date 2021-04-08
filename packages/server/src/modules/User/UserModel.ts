import mongoose, { Schema, Document, Model, Types } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
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
        type: Schema.Types.ObjectId,
        ref: "Podcast",
      },
    ],
    favorites: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: "Episode",
        },
        date: {
          type: Number,
          required: true,
        },
      },
    ],
    history: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: "Episode",
        },
        date: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    collection: "User",
  },
);

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  subscriptions: Array<Types.ObjectId>;
  favorites: Array<{
    _id: Types.ObjectId;
    date: number;
  }>;
  history: Array<{
    _id: Types.ObjectId;
    date: number;
  }>;
  createdAt: Date;
  updatedAt: Date;
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => Promise<string>;
}

UserSchema.pre<IUser>("save", function (next) {
  if (!this.isModified("password")) return next();
  if (!this.password) return next();
  return bcrypt.hash(this.password, 8).then((hash: string) => {
    this.password = hash;
    next();
  });
});

UserSchema.methods.encryptPassword = async (password: string) => {
  return bcrypt.hashSync(password, 8);
};

UserSchema.methods.authenticate = async function (password: string) {
  return bcrypt.compareSync(password, this.password);
};

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
