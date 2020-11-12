import { GraphQLInputObjectType, GraphQLString } from "graphql";

import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

export const podcastFilterMapping = {
  name: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val,
  },
};

const PodcastFilterInputType = new GraphQLInputObjectType({
  name: "PodcastFilter",
  description: "Used to filter podcasts",
  fields: () => ({
    name: {
      type: GraphQLString,
    },
  }),
});

export default PodcastFilterInputType;
