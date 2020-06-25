import { GraphQLObjectType, GraphQLBoolean, GraphQLNonNull } from "graphql";

const NotificationsType: GraphQLObjectType = new GraphQLObjectType({
  name: "Notifications",
  description: "Notifications",
  fields: () => ({
    weekly: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: ({ weekly }) => weekly,
    },
    news: {
      type: new GraphQLNonNull(GraphQLBoolean),
      resolve: ({ news }) => news,
    },
  }),
});

export default NotificationsType;
