import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} from "graphql";
import {
  globalIdField,
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
} from "graphql-relay";

import { IPodcast } from "./PodcastModel";

import { EpisodeConnection } from "../Episode/EpisodeType";

import { nodeInterface } from "../Node/TypeRegister";

import { GraphQLContext } from "../../types";

import { mongooseIDResolver } from "../../utils/mongooseIDResolver";

const PodcastType: GraphQLObjectType = new GraphQLObjectType<
  IPodcast,
  GraphQLContext
>({
  name: "Podcast",
  description: "PodcastType",
  fields: () => ({
    id: globalIdField("Podcast"),
    ...mongooseIDResolver,
    appleId: {
      type: GraphQLNonNull(GraphQLInt),
      resolve: ({ appleId }) => appleId,
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ name }) => name,
    },
    author: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ author }) => author,
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ description }) => description,
    },
    website: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ website }) => website,
    },
    rss: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ rss }) => rss,
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ image }) => image,
    },
    episodes: {
      type: GraphQLNonNull(EpisodeConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: ({ episodes }, args) => connectionFromArray(episodes, args),
    },
    genres: {
      type: GraphQLList(GraphQLString),
      resolve: ({ genres }) => genres,
    },
    genreIds: {
      type: GraphQLList(GraphQLString),
      resolve: ({ genreIds }) => genreIds,
    },
  }),
  interfaces: () => [nodeInterface],
});

export default PodcastType;

export const PodcastConnection = connectionDefinitions({
  name: "Podcast",
  nodeType: PodcastType,
});
