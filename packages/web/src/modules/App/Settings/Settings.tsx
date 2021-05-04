import React from "react";
import { Switch, Route } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import { Stack, Heading, Divider } from "@chakra-ui/react";

import Account from "./Account/Account";
import Password from "./Password/Password";
import About from "./About/About";
import Support from "./Support/Support";

const Settings = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <Stack
        direction="column"
        spacing="20px"
        w="100%"
        maxW="1000px"
        p="20px"
        margin="0 auto"
      >
        <Stack direction="column" spacing="5px">
          <Heading
            as="h1"
            fontSize={16}
            fontWeight="600"
            letterSpacing="-0.03em"
            lineHeight="30px"
            textAlign="start"
          >
            Settings
          </Heading>

          <Divider orientation="horizontal" />
        </Stack>

        <Switch>
          <Route exact path="/settings" component={Support} />
          <Route exact path="/settings/account" component={Account} />
          <Route exact path="/settings/password" component={Password} />
          <Route exact path="/settings/about" component={About} />
          <Route exact path="/settings/support" component={Support} />
        </Switch>
      </Stack>
    </Scrollbars>
  );
};

export default Settings;
