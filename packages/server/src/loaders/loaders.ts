import * as DataLoader from 'dataloader';
import { Types } from 'mongoose';

import * as UserLoader from '../modules/User/UserLoader';

export type DataLoaderKey = string | object | Types.ObjectId;

export interface GraphQLDataloaders {
  UserLoader: DataLoader<DataLoaderKey, UserLoader.IUser>;
}

export { UserLoader };