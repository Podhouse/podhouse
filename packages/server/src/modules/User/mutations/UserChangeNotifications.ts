import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { GraphQLContext } from "../../../types";

export default mutationWithClientMutationId({
  name: "UserChangeNotifications",
  inputFields: {
    weekly: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    news: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  },
  mutateAndGetPayload: async (
    { weekly, news },
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        error: "User not authenticated",
      };
    }

    user.notifications.weekly = weekly;
    user.notifications.news = news;
    await user.save();

    return {
      message: "Notifications updated successfully",
      error: null,
    };
  },
  outputFields: {
    message: {
      type: GraphQLString,
      resolve: ({ message }) => message,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
