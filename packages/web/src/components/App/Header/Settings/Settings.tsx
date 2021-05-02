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
          pathname: "/sign-in",
          state: { from: location },
        }}
        href="/sign-in"
      >
        Login
      </ChakraLink>
    </SettingsContainer>
  );
};

export default Settings;
