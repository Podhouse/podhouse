import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";

import { SettingsContainer } from "./Settings.styles";

import { useAuthContext } from "src/machines/Auth/AuthContext";

import useAuthUser from "src/hooks/useAuthUser";

import { getToken } from "src/utils/auth";

import { SettingsQuery } from "./__generated__/SettingsQuery.graphql";

const query = graphql`
  query SettingsQuery {
    currentUser {
      ...useAuthUser_user
    }
  }
`;

const Settings = () => {
  const { onOpenAuth } = useAuthContext();

  const data = useLazyLoadQuery<SettingsQuery>(
    query,
    {},
    {
      fetchPolicy: "store-and-network",
      fetchKey: getToken(),
    }
  );

  const isAuthenticated = useAuthUser(data?.currentUser);

  if (!isAuthenticated) {
    return (
      <SettingsContainer>
        <ChakraLink to="/get-started" href="/get-started" as={ReactRouterLink}>
          Login
        </ChakraLink>
      </SettingsContainer>
    );
  }

  return (
    <SettingsContainer>
      <BsPerson onClick={() => {}} size={16} />
    </SettingsContainer>
  );
};

export default Settings;
