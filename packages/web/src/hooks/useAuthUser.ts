import { graphql, readInlineData } from "react-relay";

const useAuthFragment = graphql`
  fragment useAuthUser_user on User @inline {
    id
    email
  }
`;

const useAuthUser = (userRef: any) => {
  const user = readInlineData<any>(useAuthFragment, userRef);

  const isAuthenticated = !!user;

  return isAuthenticated;
};

export default useAuthUser;
