import { GraphQLObjectType, GraphQLBoolean, GraphQLNonNull } from "graphql";

const NotificationsType: GraphQLObjectType = new GraphQLObjectType({
  name: "Notifications",
  description: "Notifications",
  fields: () => ({
    weekly: {
      type: GraphQLBoolean,
      resolve: ({ weekly }) => weekly,
    },
    news: {
      type: GraphQLBoolean,
      resolve: ({ news }) => news,
    },
  })
});

export default NotificationsType;
