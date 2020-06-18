import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RehawkProvider } from "rehawk";

import App from "src/components/App/App";

import { AuthProvider } from "src/context/Auth/Auth";
import { SettingsProvider } from "src/context/Settings/Settings";

import { theme } from "src/system/theme";
import reset from "src/system/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <>
    <ThemeProvider theme={theme}>
      <RehawkProvider>
        <AuthProvider>
          <SettingsProvider>
            <App>{children}</App>
          </SettingsProvider>
        </AuthProvider>
      </RehawkProvider>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export const getLayout = (page) => <Provider>{page}</Provider>;

export default Provider;
