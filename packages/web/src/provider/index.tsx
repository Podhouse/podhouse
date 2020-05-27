import React from "react";

import App from "../modules/App/App";

import { AuthProvider } from "../context/Auth/Auth";
import { SettingsProvider } from "../context/Settings/Settings";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => (
  <AuthProvider>
    <SettingsProvider>
      <App>{children}</App>
    </SettingsProvider>
  </AuthProvider>
);

export default Provider;
