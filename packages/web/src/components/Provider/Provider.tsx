import React, { Fragment } from "react";
import { Global } from "@emotion/core";
import { RehawkProvider } from "rehawk";

import App from "src/components/App/App";

import { AuthProvider } from "src/context/Auth/Auth";
import { SettingsProvider } from "src/context/Settings/Settings";
import { QueueProvider } from "src/context/Queue/Queue";
import { RateProvider } from "src/context/Rate/Rate";

import ThemeProvider from "src/system/ThemeProvider";
import reset from "src/system/reset";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <Fragment>
    <ThemeProvider>
      <RehawkProvider>
        <AuthProvider>
          <SettingsProvider>
            <QueueProvider>
              <RateProvider>
                <App>{children}</App>
              </RateProvider>
            </QueueProvider>
          </SettingsProvider>
        </AuthProvider>
      </RehawkProvider>
    </ThemeProvider>
    <Global styles={reset} />
  </Fragment>
);

export const getLayout = (page) => <Provider>{page}</Provider>;

export default Provider;
