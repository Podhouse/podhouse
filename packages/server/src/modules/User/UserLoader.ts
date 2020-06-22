import DataLoader from "dataloader";
import { mongooseLoader } from "@entria/graphql-mongoose-loader";
import { Types } from "mongoose";

import UserModel, { IUser } from "./UserModel";

import {
  DataLoaderUserLoad,
  ViewerCanSee,
  ClearCache,
} from "../../common/types";

export default class User {
  id: string;
  _id: Types.ObjectId | undefined;
  email: string;
  subscriptions: Array<{
    name: string;
    feed: string;
    avatar: string;
  }>;
  notifications: {
    weekly: boolean;
    news: boolean;
  };

  constructor(data: Partial<IUser>) {
    this.id = data.id;
    this._id = data._id;
    this.email = data.email;
    this.subscriptions = data.subscriptions;
  }
}

export const getLoader = () =>
  new DataLoader((ids: ReadonlyArray<string>) =>
    mongooseLoader(UserModel, ids),
  );

const viewerCanSee: ViewerCanSee = (context) => !!context.user;

export const load: DataLoaderUserLoad<User> = async (context, id) => {
  if (!id) return null;
  try {
    const data = await context.dataloaders.UserLoader.load(id);
    if (!data) return null;
    return viewerCanSee(context) ? new User(data) : null;
  } catch (err) {
    return null;
  }
};

export const clearCache: ClearCache = ({ dataloaders }, id) =>
  dataloaders.UserLoader.clear(id.toString());
