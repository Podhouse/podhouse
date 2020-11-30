import graphql from "babel-plugin-relay/macro";

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
