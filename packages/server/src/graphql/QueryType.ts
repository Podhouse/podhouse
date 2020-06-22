import { GraphQLObjectType } from "graphql";

import UserQuery from "../modules/User/UserQuery";
import PodcastQuery from "../modules/Podcast/PodcastQuery";
import EpisodeQuery from "../modules/Episode/EpisodeQuery";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...UserQuery,
    ...PodcastQuery,
    ...EpisodeQuery,
  }),
});

export default QueryType;
