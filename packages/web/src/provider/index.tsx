import React from "react";
import { AudioPlayerProvider } from "react-use-audio-player";

import App from "../modules/App/App";

import { AuthProvider } from "../context/Auth/Auth";
import { SettingsProvider } from "../context/Settings/Settings";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => (
  <AudioPlayerProvider>
    <AuthProvider>
      <SettingsProvider>
        <App>{children}</App>
      </SettingsProvider>
    </AuthProvider>
  </AudioPlayerProvider>
);

export default Provider;
