import { graphql, readInlineData } from "react-relay";

import {
  useAuthUser_user,
  useAuthUser_user$key,
} from "./__generated__/useAuthUser_user.graphql";

const useAuthFragment = graphql`
  fragment useAuthUser_user on User @inline {
    id
    email
  }
`;

const useAuthUser = (userRef: useAuthUser_user$key) => {
  const user = readInlineData<useAuthUser_user>(useAuthFragment, userRef);

  const isAuthenticated = !!user;

  return isAuthenticated;
};

export default useAuthUser;
