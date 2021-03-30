import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import sgMail from "@sendgrid/mail";

import UserModel, { IUser } from "../UserModel";

import { errorField, successField } from "../../../common/";

sgMail.setApiKey("SENDGRID_API_KEY");

type UserSendResetPasswordLinkArgs = {
  email: string;
};

export default mutationWithClientMutationId({
  name: "UserSendResetPasswordLink",
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email }: UserSendResetPasswordLinkArgs) => {
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

    const message = {
      to: email,
      from: process.env.SENGRID_MAIL_SENDER,
      subject: "Reset your account password",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };

    await sgMail.send(message);

    return {
      success: "Reset link sent successfully",
      error: null,
    };
  },
  outputFields: {
    ...errorField,
    ...successField,
  },
});
