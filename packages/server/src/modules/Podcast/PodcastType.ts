import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} from "graphql";
import { globalIdField } from "graphql-relay";

import { load } from "./PodcastLoader";

import * as EpisodeLoader from "../Episode/EpisodeLoader";
import { EpisodeConnection } from "../Episode/EpisodeType";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import {
  connectionArgs,
  connectionDefinitions,
  mongooseIDResolver,
  withFilter,
} from "../../common/";
import { IPodcast } from "./PodcastModel";
import { GraphQLContext } from "src/types";

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
      type: GraphQLInt,
      resolve: ({ appleId }) => appleId,
    },
    name: {
      type: GraphQLString,
      resolve: ({ name }) => name,
    },
    author: {
      type: GraphQLString,
      resolve: ({ author }) => author,
    },
    description: {
      type: GraphQLString,
      resolve: ({ description }) => description,
    },
    website: {
      type: GraphQLString,
      resolve: ({ website }) => website,
    },
    rss: {
      type: GraphQLString,
      resolve: ({ rss }) => rss,
    },
    image: {
      type: GraphQLString,
      resolve: ({ image }) => image,
    },
    episodes: {
      type: EpisodeConnection.connectionType,
      args: {
        ...connectionArgs,
      },
      resolve: async (podcast, args, context) =>
        await EpisodeLoader.loadAll(
          context,
          withFilter(args, { podcast: podcast._id }),
        ),
    },
    country: {
      type: GraphQLString,
      resolve: ({ country }) => country,
    },
    primaryGenre: {
      type: GraphQLString,
      resolve: ({ primaryGenre }) => primaryGenre,
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

registerTypeLoader(PodcastType, load);

export const PodcastConnection = connectionDefinitions({
  name: "Podcast",
  nodeType: PodcastType,
});
