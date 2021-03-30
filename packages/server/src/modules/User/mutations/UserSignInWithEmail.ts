import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserModel, { IUser } from "../UserModel";

import { generateToken } from "../../../utils/auth";

import { errorField, successField } from "../../../common/";

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
    const currentUser: IUser = await UserModel.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!currentUser) {
      return {
        token: null,
        error: "Account with this email address not found",
        success: null,
      };
    }

    const correctPassword = await currentUser.authenticate(password);

    if (!correctPassword) {
      return {
        token: null,
        error: "Invalid password",
        success: null,
      };
    }

    return {
      token: generateToken(currentUser._id),
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
