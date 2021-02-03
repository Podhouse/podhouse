import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField } from "graphql-relay";

import { load } from "./EpisodeLoader";

import PodcastType from "../Podcast/PodcastType";
import * as PodcastLoader from "../Podcast/PodcastLoader";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import { connectionDefinitions, mongooseIDResolver } from "../../common/";

const OwnerType: GraphQLObjectType = new GraphQLObjectType({
  name: "Owner",
  description: "OwnerType",
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ name }) => name,
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ email }) => email,
    },
  }),
});

const EpisodeType: GraphQLObjectType = new GraphQLObjectType({
  name: "Episode",
  description: "EpisodeType",
  fields: () => ({
    id: globalIdField("Episode"),
    ...mongooseIDResolver,
    title: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ title }) => title,
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ description }) => description,
    },
    publishedDate: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ publishedDate }) => publishedDate,
    },
    link: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ link }) => link,
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ image }) => image,
    },
    audio: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ audio }) => audio,
    },
    guid: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ guid }) => guid,
    },
    duration: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ duration }) => duration,
    },
    generator: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ generator }) => generator,
    },
    owner: {
      type: GraphQLNonNull(OwnerType),
      resolve: ({ owner }) => owner,
    },
    podcast: {
      type: GraphQLNonNull(PodcastType),
      resolve: async ({ podcast }, args, context) =>
        await PodcastLoader.load(context, podcast),
    },
  }),
  interfaces: () => [nodeInterface],
});

export default EpisodeType;

registerTypeLoader(EpisodeType, load);

export const EpisodeConnection = connectionDefinitions({
  name: "Episode",
  nodeType: EpisodeType,
});
