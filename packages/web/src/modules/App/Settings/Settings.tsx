import React, { Suspense } from "react";
import { Box, Text, Link, Stack } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";

import { SettingsContainer } from "./Settings.styles";

import ChangePassword from "./ChangePassword/ChangePassword";

import useAuthUser from "src/hooks/useAuthUser";

import { useAuthContext } from "src/machines/Auth/AuthContext";

import { getToken } from "src/utils/auth";

import { SettingsUserQuery } from "./__generated__/SettingsUserQuery.graphql";

const query = graphql`
  query SettingsUserQuery {
    currentUser {
      ...useAuthUser_user
    }
  }
`;

const SettingsComponent = () => {
  const { handleAuth } = useAuthContext();

  const { currentUser } = useLazyLoadQuery<SettingsUserQuery>(
    query,
    {},
    {
      fetchPolicy: "store-or-network",
      fetchKey: getToken(),
    }
  );

  const user = useAuthUser(currentUser);

  if (!user) {
    return (
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        w="100%"
        h="100%"
        bgColor="red"
      >
        <Stack spacing={4} shouldWrapChildren align="center">
          <Text color="#101010" maxWidth="300px" textAlign="center">
            You should be logged in to see your subscriptions
          </Text>
          <Link
            color="brand.900"
            fontWeight="bold"
            textTransform="uppercase"
            onClick={handleAuth}
          >
            Login
          </Link>
        </Stack>
      </Box>
    );
  }

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <SettingsContainer>
        <ChangePassword />
      </SettingsContainer>
    </Scrollbars>
  );
};

const Settings = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <SettingsComponent />
  </Suspense>
);

export default Settings;
