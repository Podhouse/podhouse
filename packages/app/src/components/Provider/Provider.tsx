import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { RehawkProvider } from "rehawk";

import { AuthProvider } from "src/context/Auth/Auth";
import { SettingsProvider } from "src/context/Settings/Settings";
import { QueueProvider } from "src/context/Queue/Queue";
import { RateProvider } from "src/context/Rate/Rate";

import theme from "src/system/theme";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <RehawkProvider>
        <AuthProvider>
          <SettingsProvider>
            <QueueProvider>
              <RateProvider>
                {children}
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
