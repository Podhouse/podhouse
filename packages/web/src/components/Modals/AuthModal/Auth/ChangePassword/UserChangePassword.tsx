import { graphql } from "react-relay";

const UserChangePassword = graphql`
  mutation UserChangePasswordMutation($input: UserChangePasswordInput!) {
    UserChangePassword(input: $input) {
      success
      error
    }
  }
`;

export default UserChangePassword;
