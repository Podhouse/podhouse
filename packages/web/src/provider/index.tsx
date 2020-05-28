import React from "react";
import { Provider as ReakitProvider } from "reakit";

import App from "../modules/App/App";

import { AuthProvider } from "../context/Auth/Auth";
import { SettingsProvider } from "../context/Settings/Settings";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => (
  <AuthProvider>
    <SettingsProvider>
      <ReakitProvider>
        <App>{children}</App>
      </ReakitProvider>
    </SettingsProvider>
  </AuthProvider>
);

export default Provider;
