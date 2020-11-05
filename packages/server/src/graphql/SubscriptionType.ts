import { GraphQLObjectType } from "graphql";

const SubscriptionType = new GraphQLObjectType({
  name: "Subscription",
  description: "Subscription",
  fields: () => ({}),
});

export default SubscriptionType;
