import { GraphQLID, GraphQLInputObjectType } from "graphql";
import { FILTER_CONDITION_TYPE } from "@entria/graphql-mongo-helpers";

import { getObjectId } from "../../common/";

export const episodeFilterMapping = {
  podcast: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
  episode: {
    type: FILTER_CONDITION_TYPE.MATCH_1_TO_1,
    format: (val: string) => val && getObjectId(val),
  },
};

const CommentFilterInputType = new GraphQLInputObjectType({
  name: "CommentFilter",
  description: "Used to filter episodes",
  fields: () => ({
    podcast: {
      type: GraphQLID,
    },
    episode: {
      type: GraphQLID,
    },
  }),
});

export default CommentFilterInputType;
