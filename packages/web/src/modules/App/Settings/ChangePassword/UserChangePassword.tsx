import graphql from "babel-plugin-relay/macro";

const UserChangePassword = graphql`
  mutation UserChangePasswordMutation($input: UserChangePasswordInput!) {
    UserChangePassword(input: $input) {
      success
      error
    }
  }
`;

export default UserChangePassword;
