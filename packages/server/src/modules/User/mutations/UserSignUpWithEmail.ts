import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserModel, { IUser } from "../UserModel";

import { generateToken } from "../../../utils/auth";

import { errorField, successField } from "../../../common/";

type UserSignUpWithEmailArgs = {
  email: string;
  password: string;
};

export default mutationWithClientMutationId({
  name: "UserSignUpWithEmail",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }: UserSignUpWithEmailArgs) => {
    const userExists = await UserModel.findOne({
      email: email.trim().toLowerCase(),
    });

    if (userExists) {
      return {
        token: null,
        error: "Email address is already in use",
        success: null,
      };
    }

    const user: IUser = await new UserModel({
      email,
      password,
    }).save();

    return {
      token: generateToken(user._id),
      success: "Signed up succcessfully",
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
