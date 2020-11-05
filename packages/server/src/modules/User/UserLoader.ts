import {
  connectionFromMongoCursor,
  mongooseLoader,
} from "@entria/graphql-mongoose-loader";
import DataLoader from "dataloader";
import { ConnectionArguments } from "graphql-relay";
import { Schema } from "mongoose";

import UserModel, { IUser } from "./UserModel";

import { GraphQLContext } from "../../types";

import { DataLoaderKey } from "../../loaders";

import { escapeRegex } from "../../utils/escapeRegex";

export default class User {
  id: string;
  _id: string;
  email: string;
  password: string;
  subscriptions: Array<Schema.Types.ObjectId>;

  constructor(data) {
    this.id = data._id;
    this._id = data._id;
    this.email = data.email;
    this.subscriptions = data.subscriptions;
  }
}

export const getLoader = () =>
  new DataLoader<DataLoaderKey, IUser>((ids) =>
    mongooseLoader(UserModel, ids as string[]),
  );

const viewerCanSee = (context: GraphQLContext) => !!context.user;

export const load = async (
  context: GraphQLContext,
  id: DataLoaderKey,
): Promise<User | null> => {
  if (!id && typeof id !== "string") {
    return null;
  }

  let data;

  try {
    data = await context.dataloaders.UserLoader.load(id as string);
  } catch (err) {
    return null;
  }

  return viewerCanSee(context) ? new User(data) : null;
};

export const clearCache = (
  { dataloaders }: GraphQLContext,
  id: Schema.Types.ObjectId,
) => dataloaders.UserLoader.clear(id.toString());

interface LoadUsersArgs extends ConnectionArguments {
  search?: string;
}

export const loadAll = async (context: GraphQLContext, args: LoadUsersArgs) => {
  const defaultWhere = {
    removedAt: null,
  };

  const where = args.search
    ? {
        ...defaultWhere,
        name: { $regex: new RegExp(`^${escapeRegex(args.search)}`, "ig") },
      }
    : defaultWhere;

  const users = UserModel.find(where, { _id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });
};
