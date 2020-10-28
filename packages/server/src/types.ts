import { Request, Response } from "koa";

import Dataloader from "dataloader";

import { IUser } from "./modules/User/UserModel";
import { IPodcast } from "./modules/Podcast/PodcastModel";

export type Dataloaders = {
  UserLoader: Dataloader<string, IUser>;
  PodcastLoader: Dataloader<string, IPodcast>;
};

export type GraphQLContext = {
  req: Request;
  res: Response;
  user?: IUser;
  dataloaders: Dataloaders;
};
