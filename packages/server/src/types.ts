import mongoose from "mongoose";
import Dataloader from "dataloader";

import { IUser } from "./modules/User/UserModel";
import { DataLoaders } from "./modules/Loader/LoaderRegister";

declare type ObjectId = mongoose.Schema.Types.ObjectId;

export type GraphQLContext = {
  user?: IUser;
  dataloaders: DataLoaders;
  dataloader: Dataloader<string, any>;
};

export type LoaderFn = (
  ctx: GraphQLContext,
  id: string | ObjectId | object,
) => any;
