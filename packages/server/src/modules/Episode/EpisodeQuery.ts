import { GraphQLString } from "graphql";

const EpisodeQuery = {
  searchEpisode: {
    type: GraphQLString,
    resolve: () => {
      return "search episode query";
    },
  },
  getEpisode: {
    type: GraphQLString,
    resolve: () => {
      return "get episode query";
    },
  },
};

export default EpisodeQuery;
