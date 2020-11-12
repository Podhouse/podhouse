import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { errorField, successField } from "@podhouse/graphql";

import UserModel from "../UserModel";

import { generateToken } from "../../../utils/auth";

type UserSignInWithEmailArgs = {
  email: string;
  password: string;
};

export default mutationWithClientMutationId({
  name: "UserSignInWithEmail",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }: UserSignInWithEmailArgs) => {
    const user = await UserModel.findOne({ email: email.trim().toLowerCase() });

    if (!user) {
      return {
        error: "User doesn't exist",
      };
    }

    const correctPassword = await user.authenticate(password);

    if (!correctPassword) {
      return {
        error: "Invalid password",
      };
    }

    return {
      token: generateToken(user),
      success: "Logged in successfully",
      error: null,
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    ...errorField,
    ...successField,
  },
});
