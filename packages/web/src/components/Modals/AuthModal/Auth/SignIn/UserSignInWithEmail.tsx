import { graphql } from "react-relay";

const UserSignInWithEmail = graphql`
  mutation UserSignInWithEmailMutation($input: UserSignInWithEmailInput!) {
    UserSignInWithEmail(input: $input) {
      token
      success
      error
    }
  }
`;

export default UserSignInWithEmail;
