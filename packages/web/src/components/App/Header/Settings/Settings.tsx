import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

import { SettingsContainer } from "./Settings.styles";

const Settings = () => {
  const location = useLocation();

  return (
    <SettingsContainer>
      <ChakraLink
        to={{
          pathname: "/get-started",
          state: { from: location },
        }}
        href="/get-started"
        as={ReactRouterLink}
      >
        Login
      </ChakraLink>
    </SettingsContainer>
  );
};

export default Settings;
