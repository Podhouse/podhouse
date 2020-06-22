import { GraphQLString } from "graphql";

const PodcastQuery = {
  searchPodcast: {
    type: GraphQLString,
    resolve: () => {
      return "search podcast query";
    },
  },
  getPodcast: {
    type: GraphQLString,
    resolve: () => {
      return "get podcast query";
    },
  },
};

export default PodcastQuery;
