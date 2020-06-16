import React from "react";
import { RehawkProvider } from "rehawk";

import App from "../modules/App/App";

import { AuthProvider } from "../context/Auth/Auth";
import { SettingsProvider } from "../context/Settings/Settings";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <RehawkProvider>
    <AuthProvider>
      <SettingsProvider>
        <App>{children}</App>
      </SettingsProvider>
    </AuthProvider>
  </RehawkProvider>
);

export default Provider;
