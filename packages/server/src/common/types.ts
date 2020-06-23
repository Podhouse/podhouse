import { GraphQLObjectType } from "graphql";
import { Request, Response } from "koa";
import DataLoader from "dataloader";
import { Types } from "mongoose";

import { IUser } from "../modules/User/UserModel";

export type RegisteredTypes = {
  [key: string]: GraphQLObjectType;
};

export type Key = string;

export type GraphQLContext = {
  req: Request;
  res: Response;
  dataloaders: DataLoaders;
  user?: IUser;
};

export type Loader = {
  getLoader: () => DataLoader<string, any>;
  load: (context: GraphQLContext, id: string) => Promise<any>;
};

export type Loaders = {
  [key: string]: Loader;
};

export type DataLoaders = {
  UserLoader: DataLoader<Key, IUser>;
};

export type DataLoaderUserLoad<T> = (
  context: GraphQLContext,
  id: string,
) => Promise<T | null>;

export type ViewerCanSee = (context: GraphQLContext) => any;

export type ClearCache = (context: GraphQLContext, id: Types.ObjectId) => void;

export type GetUser = (token: string) => Promise<IUser | { user: null }>;
