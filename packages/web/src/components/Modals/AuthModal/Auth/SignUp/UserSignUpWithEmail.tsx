import graphql from 'babel-plugin-relay/macro';

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
