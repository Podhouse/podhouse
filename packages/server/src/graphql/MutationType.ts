import { GraphQLObjectType } from "graphql";

import UserMutation from "../modules/User/UserMutation";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...UserMutation,
  }),
});

export default MutationType;
