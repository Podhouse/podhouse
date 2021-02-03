import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { Box, Text, Link, Stack } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

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
        <Helmet>
          <title>Settings</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="The best podcast web app to listen to your favorite podcasts"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta property="twitter:title" content="Podhouse" />
          <meta
            property="twitter:description"
            content="The best podcast web app to listen to your favorite podcasts"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/C1TOvBB.jpg"
          />
          <meta property="twitter:url" content={location.pathname} />

          {/* Open Graph */}
          <meta property="og:url" content={location.pathname} key="ogurl" />
          <meta
            property="og:image"
            content="https://i.imgur.com/C1TOvBB.jpg"
            key="ogimage"
          />
          <meta property="og:site_name" content="Podhouse" key="ogsitename" />
          <meta property="og:title" content="Podhouse" key="ogtitle" />
          <meta
            property="og:description"
            content="The best podcast web app to listen to your favorite podcasts"
            key="ogdesc"
          />
        </Helmet>

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
