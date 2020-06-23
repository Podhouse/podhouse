import { Request, Response } from "koa";

import Dataloader from "dataloader";

import { IUser } from "./modules/User/UserModel";

type Key = string;

export type Dataloaders = {
  UserLoader: Dataloader<Key, IUser>;
};

export type GraphQLContext = {
  req: Request;
  res: Response;
  user?: IUser;
  dataloaders: Dataloaders;
};
