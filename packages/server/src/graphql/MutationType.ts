import { GraphQLObjectType } from "graphql";

import UserMutation from "../modules/User/mutations";
import EpisodeMutation from "../modules/Episode/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...UserMutation,
    ...EpisodeMutation,
  }),
});

export default MutationType;
