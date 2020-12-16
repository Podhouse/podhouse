import React from "react";
import { User } from "react-feather";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { Link } from "@chakra-ui/react";

import { SettingsContainer } from "./Settings.styles";

import { useAuthContext } from "src/machines/Auth/AuthContext";
import { useSettingsContext } from "src/machines/Settings/SettingsContext";

import useAuthUser from "src/hooks/useAuthUser";

import { getToken } from "src/utils/auth";

const Settings = () => {
  const { handleAuth } = useAuthContext();
  const { handleSettings } = useSettingsContext();

  // const data = useLazyLoadQuery<SettingsQuery>(
  //   query,
  //   {},
  //   {
  //     fetchPolicy: "network-only",
  //     fetchKey: getToken(),
  //   }
  // );

  // const isAuthenticated = useAuthUser(data?.currentUser);

  // if (!isAuthenticated) {
  //   return (
  //     <SettingsContainer>
  //       <Link
  //         color="brand.900"
  //         fontWeight="bold"
  //         textTransform="uppercase"
  //         onClick={handleAuth}
  //       >
  //         Login
  //       </Link>
  //     </SettingsContainer>
  //   );
  // }

  return (
    <SettingsContainer>
      <User
        onClick={handleSettings}
        size={16}
        color="#B7B7B7"
        strokeWidth={1.7}
      />
    </SettingsContainer>
  );
};

export default Settings;
