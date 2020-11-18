import { graphql } from "react-relay";

const UserSignUpWithEmail = graphql`
  mutation UserSignUpWithEmailMutation($input: UserSignUpWithEmailInput!) {
    UserSignUpWithEmail(input: $input) {
      token
      success
      error
    }
  }
`;

export default UserSignUpWithEmail;
