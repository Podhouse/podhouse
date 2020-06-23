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
  },
  {
    timestamps: true,
    collection: "User",
  },
);

export interface IUser extends Document {
  email: string;
  password?: string;
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
}

UserSchema.pre<IUser>("save", function encryptPasswordHook(next) {
  if (this.isModified("password")) {
    this.password = this.encryptPassword(this.password);
  }
  return next();
});

UserSchema.methods = {
  authenticate(plainTextPassword: string) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 8);
  },
};

// This line is only to fix "Cannot overwrite `User` model once compiled." error.
// https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose
mongoose.models = {};

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
