import * as DataLoader from 'dataloader';
import { Types } from 'mongoose';

import * as UserLoader from '../modules/User/UserLoader';

import { IUser } from '../modules/User/UserModel';

export type DataLoaderKey = string | object | Types.ObjectId;

export interface GraphQLDataloaders {
  UserLoader: DataLoader<DataLoaderKey, IUser>;
}

export { UserLoader };