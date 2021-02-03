import mongoose, { Types } from "mongoose";

import { IUser } from "./modules/User/UserModel";
import { DataLoaders } from "./modules/Loader/LoaderRegister";

declare type ObjectId = mongoose.Schema.Types.ObjectId;

export type GraphQLContext = {
  user?: IUser;
  dataloaders: DataLoaders;
};

export type LoaderFn = (
  ctx: GraphQLContext,
  id: string | ObjectId | object,
) => any;

export type Podcast = {
  appleId: number;
  name: string;
  author: string;
  description: string;
  website?: string;
  rss: string;
  image: string;
  country: string;
  primaryGenre: string;
  genres: Array<string>;
  genreIds: Array<string>;
  owner: {
    name: string;
    email: string;
  };
};

export type RawItunesPodcast = {
  collectionId: number;
  collectionName: string;
  artistName: string;
  feedUrl: string;
  country: string;
  primaryGenreName: string;
  artworkUrl600: string;
  genres: Array<string>;
  genreIds: Array<string>;
};

export type iTunesPodcast = {
  appleId: number;
  name: string;
  author: string;
  rss: string;
  country: string;
  primaryGenre: string;
  artworkUrl600: string;
  genres: Array<string>;
  genreIds: Array<string>;
};

export type FeedPodcast = {
  description: string;
  website: string;
  owner: {
    name: string | undefined;
    email: string | undefined;
  };
  episodes: Array<Episode>;
};

export type Episode = {
  title: string;
  description: string;
  publishedDate: string;
  link: string;
  image: string;
  audio: string;
  guid: string;
  duration: string;
  generator: string;
  owner: {
    name: string;
    email: string;
  };
  podcast: Types.ObjectId;
};

export type Results = {
  resultCount: number;
  results: Array<RawItunesPodcast>;
};
