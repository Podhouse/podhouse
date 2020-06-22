import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserType from "./UserType";
import UserModel from "./UserModel";

import { GraphQLContext } from "../../common/types";

import { generateToken } from "../../common/auth";

const signInUser = mutationWithClientMutationId({
  name: "signInUser",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return {
        token: null,
        error: "Invalid email or password",
      };
    }

    const correctPassword = await user.authenticate(password);

    if (!correctPassword) {
      return {
        token: null,
        error: "Invalid password",
      };
    }

    return {
      token: generateToken(user),
      error: null,
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});

const signUpUser = mutationWithClientMutationId({
  name: "signUpUser",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const userExists = await UserModel.findOne({ email });
    if (userExists) throw new Error("Email is already in use");
    try {
      const newUser = await UserModel.create(email, password);
      return {
        user: newUser,
      };
    } catch (error) {
      return error;
    }
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: async ({ user }, args, context: GraphQLContext, info) => {
        const {
          dataloaders: { UserLoader },
        } = context;
        return UserLoader.load(user._id);
      },
    },
  },
});

const resetUserPassword = mutationWithClientMutationId({
  name: "resetUserPassword",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  outputFields: {
    user: {
      type: UserType,
      resolve: async ({ id }, args, context: GraphQLContext, info) => {
        const {
          dataloaders: { UserLoader },
        } = context;
        return UserLoader.load(id);
      },
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    return { email, password };
  },
});

const UserMutation = {
  signInUser,
  signUpUser,
  resetUserPassword,
};

export default UserMutation;
