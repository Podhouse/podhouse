import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { globalIdField } from "graphql-relay";

import { connectionDefinitions, mongooseIDResolver } from "@podhouse/graphql";

import { load } from "./EpisodeLoader";

import { nodeInterface, registerTypeLoader } from "../Node/TypeRegister";

import { IEpisode } from "./EpisodeModel";

import { GraphQLContext } from "../../types";

const EpisodeType: GraphQLObjectType = new GraphQLObjectType<
  IEpisode,
  GraphQLContext
>({
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
    duration: {
      type: GraphQLNonNull(GraphQLString),
      resolve: ({ duration }) => duration,
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
