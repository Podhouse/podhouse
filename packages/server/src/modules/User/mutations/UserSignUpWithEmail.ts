import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "../UserType";
import UserModel, { IUser } from "../UserModel";
import * as UserLoader from "../UserLoader";

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
    const currentUser: IUser = await UserModel.findOne({
      email: email.trim().toLowerCase(),
    });

    if (currentUser) {
      return {
        token: null,
        error: "Email address is already in use",
        success: null,
      };
    }

    const newUser: IUser = await new UserModel({
      email,
      password,
    }).save();

    return {
      token: generateToken(newUser._id),
      success: "Signed up succcessfully",
      error: null,
    };
  },
  outputFields: {
    currentUser: {
      type: UserType,
      resolve: async ({ id }, _, context) => {
        return await UserLoader.load(context, id);
      },
    },
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    ...errorField,
    ...successField,
  },
});
