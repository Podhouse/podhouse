import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { RehawkProvider } from "rehawk";

import { AuthProvider } from "src/context/Auth/Auth";
import { SettingsProvider } from "src/context/Settings/Settings";
import { QueueProvider } from "src/context/Queue/Queue";
import { RateProvider } from "src/context/Rate/Rate";

import App from "src/components/App/App";

import theme from "src/system/theme";

const Provider = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <RehawkProvider>
        <AuthProvider>
          <SettingsProvider>
            <QueueProvider>
              <RateProvider>
                <App />
              </RateProvider>
            </QueueProvider>
          </SettingsProvider>
        </AuthProvider>
      </RehawkProvider>
    </ChakraProvider>
    <CSSReset />
  </BrowserRouter>
);

export default Provider;
