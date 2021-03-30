import { GraphQLInputObjectType, GraphQLString } from "graphql";

import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

import escapeRegex from "../../utils/escapeRegex";

export const podcastFilterMapping = {
  name: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
  author: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
  country: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
  primaryGenre: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => new RegExp(`^${escapeRegex(val)}`),
  },
};

const PodcastFilterInputType = new GraphQLInputObjectType({
  name: "PodcastFilter",
  description: "Used to filter podcasts",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    primaryGenre: {
      type: GraphQLString,
    },
  }),
});

export default PodcastFilterInputType;
