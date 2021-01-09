import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

import UserModel, { IUser } from "../UserModel";

import { generateToken } from "../../../utils/auth";

import { errorField, successField } from "../../../common/";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    const userSignUpEmailMessage = {
      to: email,
      from: "podhouse@podhouse.app",
      subject: "Sending with Twilio SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    sgMail.send(userSignUpEmailMessage).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      },
    );

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
