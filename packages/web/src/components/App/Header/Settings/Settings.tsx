import React from "react";
import { User } from "react-feather";
import { useQuery, graphql, STORE_OR_NETWORK } from "relay-hooks";

import { SettingsContainer } from "./Settings.styles";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";

import withData from "src/relay/withData";

import Link from "src/system/Link/Link";

import useAuthUser from "src/hooks/useAuthUser";

import { SettingsQuery } from "./__generated__/SettingsQuery.graphql";

const query = graphql`
  query SettingsQuery {
    currentUser {
      ...useAuthUser_user
    }
  }
`;

const variables = {};

const Settings = () => {
  const [, , handleAuth] = useAuthContext();
  const [, handleSettings] = useSettingsContext();
  const { props, error } = useQuery<SettingsQuery>(query, variables, {
    fetchPolicy: STORE_OR_NETWORK,
  });

  if (props) {
    const isAuthenticated = useAuthUser(props.currentUser);

    console.log("isAuthenticated: ", isAuthenticated);
    console.log("props.currentUser: ", props.currentUser);

    if (!isAuthenticated) {
      return (
        <SettingsContainer>
          <Link onClick={handleAuth} variant="primary" size="normal">
            Login
          </Link>
        </SettingsContainer>
      );
    }

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
  } else if (error) {
    return <div>error</div>;
  }

  return <SettingsContainer>...</SettingsContainer>;
};

export default withData(Settings, { query });
