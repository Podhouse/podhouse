import { GraphQLInputObjectType, GraphQLString } from "graphql";

import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

export const podcastFilterMapping = {
  search: {
    type: FILTER_CONDITION_TYPE.CUSTOM_CONDITION,
    format: (search: string) => ({
      $or: [
        {
          name: search,
        },
        {
          primaryGenre: search,
        },
      ],
    }),
  },
};

const PodcastFilterInputType = new GraphQLInputObjectType({
  name: "PodcastFilter",
  description: "Used to filter podcasts",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    primaryGenre: {
      type: GraphQLString,
    },
  }),
});

export default PodcastFilterInputType;
