import {
  connectionFromMongoCursor,
  mongooseLoader,
} from "@entria/graphql-mongoose-loader";
import DataLoader from "dataloader";
import { ConnectionArguments } from "graphql-relay";
import { Schema } from "mongoose";

import EpisodeModel, { IEpisode } from "./EpisodeModel";

import { GraphQLContext } from "../../types";

import { DataLoaderKey } from "../../loaders";

import { escapeRegex } from "../../utils/escapeRegex";

export default class Episode {
  id: string;
  _id: string;
  title: string;
  description: string;
  publishedDate: string;
  link: string;
  image: string;
  audio: string;
  duration: string;

  constructor(data) {
    this.id = data._id;
    this._id = data._id;
    this.title = data.title;
    this.description = data.description;
    this.publishedDate = data.publishedDate;
    this.link = data.link;
    this.image = data.image;
    this.audio = data.audio;
    this.duration = data.duration;
  }
}

export const getLoader = () =>
  new DataLoader<DataLoaderKey, IEpisode>((ids) =>
    mongooseLoader(EpisodeModel, ids as string[]),
  );

const viewerCanSee = () => true;

export const load = async (
  context: GraphQLContext,
  id: DataLoaderKey,
): Promise<Episode | null> => {
  if (!id && typeof id !== "string") {
    return null;
  }

  let data;

  try {
    data = await context.dataloaders.EpisodeLoader.load(id as string);
  } catch (err) {
    return null;
  }

  return viewerCanSee() ? new Episode(data) : null;
};

export const clearCache = (
  { dataloaders }: GraphQLContext,
  id: Schema.Types.ObjectId,
) => dataloaders.EpisodeLoader.clear(id.toString());

interface LoadEpisodesArgs extends ConnectionArguments {
  search?: string;
}

export const loadAll = async (context: any, args: LoadEpisodesArgs) => {
  const defaultWhere = {
    removedAt: null,
  };

  const where = args.search
    ? {
        ...defaultWhere,
        name: { $regex: new RegExp(`^${escapeRegex(args.search)}`, "ig") },
      }
    : defaultWhere;

  const episodes = EpisodeModel.find(where, { _id: 1 })
    .sort({ createdAt: -1 })
    .lean();

  return connectionFromMongoCursor({
    cursor: episodes,
    context,
    args,
    loader: load,
  });
};
