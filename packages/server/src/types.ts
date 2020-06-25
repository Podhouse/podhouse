import { Request, Response } from "koa";

import Dataloader from "dataloader";

import { IUser } from "./modules/User/UserModel";

export type Dataloaders = {
  UserLoader: Dataloader<string, IUser>;
};

export type GraphQLContext = {
  req: Request;
  res: Response;
  user?: IUser;
  dataloaders: Dataloaders;
};
