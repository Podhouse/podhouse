import { GraphQLObjectType } from "graphql";

import UserQuery from "../modules/User/UserQuery";

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    ...UserQuery,
  }),
});

export default QueryType;
