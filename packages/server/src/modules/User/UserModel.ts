import mongoose, { Schema, Document, Model } from "mongoose";
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
      minlength: 3,
    },
    subscriptions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Podcast",
      },
    ],
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "Episode",
      },
    ],
    history: [
      {
        type: Schema.Types.ObjectId,
        ref: "Episode",
      },
    ],
    currentListening: {
      type: Schema.Types.ObjectId,
      ref: "Episode",
    },
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
  email: string;
  password: string;
  subscriptions: Array<Schema.Types.ObjectId>;
  favorites: Array<Schema.Types.ObjectId>;
  history: Array<Schema.Types.ObjectId>;
  currentListening: Schema.Types.ObjectId;
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

UserSchema.methods = {
  authenticate(plainTextPassword: string) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 8);
  },
};

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
