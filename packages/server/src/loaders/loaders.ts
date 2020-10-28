import * as DataLoader from "dataloader";
import { Types } from "mongoose";

import * as UserLoader from "../modules/User/UserLoader";
import { IUser } from "../modules/User/UserModel";

import * as PodcastLoader from "../modules/Podcast/PodcastLoader";
import { IPodcast } from "../modules/Podcast/PodcastModel";

import * as EpisodeLoader from "../modules/Episode/EpisodeLoader";
import { IEpisode } from "../modules/Episode/EpisodeModel";

export type DataLoaderKey = string | object | Types.ObjectId;

export interface GraphQLDataloaders {
  UserLoader: DataLoader<DataLoaderKey, IUser>;
  PodcastLoader: DataLoader<DataLoaderKey, IPodcast>;
  EpisodeLoader: DataLoader<DataLoaderKey, IEpisode>;
}

export { UserLoader, PodcastLoader, EpisodeLoader };
