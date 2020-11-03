import {
  connectionFromMongoCursor,
  mongooseLoader,
} from "@entria/graphql-mongoose-loader";
import DataLoader from "dataloader";
import { ConnectionArguments } from "graphql-relay";
import { Schema } from "mongoose";
import {
  buildMongoConditionsFromFilters,
  GraphQLFilter,
} from "@entria/graphql-mongo-helpers";

import PodcastModel, { IPodcast } from "./PodcastModel";

import { IEpisode } from "../Episode/EpisodeModel";

import { GraphQLContext } from "../../types";

import { DataLoaderKey } from "../../loaders";

import { escapeRegex } from "../../utils/escapeRegex";
import { withConnectionCursor } from "../../utils/withConnectionCursor";

export default class Podcast {
  id: string;
  _id: string;
  appleId: number;
  name: string;
  author: string;
  description: string;
  website: string;
  rss: string;
  image: string;
  episodes: Array<IEpisode>;
  genres: Array<string>;
  genreIds: Array<string>;

  constructor(data) {
    this.id = data._id;
    this._id = data._id;
    this.appleId = data.appleId;
    this.name = data.name;
    this.author = data.author;
    this.description = data.description;
    this.website = data.website;
    this.rss = data.rss;
    this.image = data.image;
    this.episodes = data.episodes;
    this.genres = data.genres;
    this.genreIds = data.genreIds;
  }
}

export const getLoader = () =>
  new DataLoader<DataLoaderKey, IPodcast>((ids) =>
    mongooseLoader(PodcastModel, ids as string[]),
  );

const viewerCanSee = () => true;

export const load = async (
  context: GraphQLContext,
  id: DataLoaderKey,
): Promise<Podcast | null> => {
  if (!id && typeof id !== "string") {
    return null;
  }

  let data;

  try {
    data = await context.dataloaders.PodcastLoader.load(id as string);
  } catch (err) {
    return null;
  }

  return viewerCanSee() ? new Podcast(data) : null;
};

export const clearCache = (
  { dataloaders }: GraphQLContext,
  id: Schema.Types.ObjectId,
) => dataloaders.PodcastLoader.clear(id.toString());

interface LoadPodcastsArgs extends ConnectionArguments {
  search?: string;
}

export const loadAll = async (
  context: GraphQLContext,
  args: LoadPodcastsArgs,
) => {
  const defaultWhere = {
    removedAt: null,
  };

  const where = args.search
    ? {
        ...defaultWhere,
        name: {
          $regex: new RegExp(`^${escapeRegex(args.search)}`, "ig"),
        },
      }
    : defaultWhere;

  const podcasts = PodcastModel.find(where, { _id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return connectionFromMongoCursor({
    cursor: podcasts,
    context,
    args,
    loader: load,
  });
};
