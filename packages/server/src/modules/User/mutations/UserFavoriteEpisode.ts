import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";

import * as UserLoader from "../UserLoader";

import { UserConnection } from "../UserType";

import { GraphQLContext } from "../../../types";

import { errorField, successField } from "../../../common/";

type UserFavoriteEpisodeArgs = {
  _id: string;
};

export default mutationWithClientMutationId({
  name: "UserFavoriteEpisode",
  inputFields: {
    _id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (
    { _id }: UserFavoriteEpisodeArgs,
    { user }: GraphQLContext,
  ) => {
    if (!user) {
      return {
        _id: null,
        error: "User not authenticated",
        success: null,
      };
    }

    const hasFavoritedEpisode: boolean = user.favorites.includes(_id as any);

    if (hasFavoritedEpisode === true) {
      return {
        _id: user._id,
        error: "Already favorited this episode",
        success: null,
      };
    } else {
      user.favorites.push(_id as any);
      await user.save();

      return {
        _id: user._id,
        error: null,
        success: "Favorited episode successfully!",
      };
    }
  },
  outputFields: {
    user: {
      type: UserConnection.edgeType,
      resolve: async ({ _id }, _, context) => {
        const currentUser = await UserLoader.load(context, _id);

        if (!currentUser) {
          return null;
        }

        return {
          cursor: toGlobalId("User", currentUser._id),
          node: currentUser,
        };
      },
    },
    ...errorField,
    ...successField,
  },
});
