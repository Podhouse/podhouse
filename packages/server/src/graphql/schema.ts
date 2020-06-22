import { GraphQLSchema } from "graphql";

import QueryType from "./QueryType";
import MutationType from "./MutationType";

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
