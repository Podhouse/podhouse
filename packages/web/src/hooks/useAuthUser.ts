import graphql from "babel-plugin-relay/macro";
import { readInlineData } from "react-relay";

const useAuthFragment = graphql`
  fragment useAuthUser_user on User @inline {
    _id
    id
    email
    createdAt
    updatedAt
  }
`;

const useAuthUser = (userRef: any) => {
  const user = readInlineData<any>(useAuthFragment, userRef);

  const isAuthenticated = !!user;

  return isAuthenticated;
};

export default useAuthUser;
