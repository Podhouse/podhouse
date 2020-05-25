import React, { useContext } from "react";

import useSettings from "../../hooks/useSettings";

const SettingsContext = React.createContext(undefined as any);

const SettingsProvider = ({ children }: any) => {
  const { settings, handleSettings } = useSettings();

  const data = [settings, handleSettings];

  return (
    <SettingsContext.Provider value={data}>{children}</SettingsContext.Provider>
  );
};

const useSettingsContext = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings can only be used inside SettingsProvider");
  }
  return context;
};

export { SettingsProvider, useSettingsContext };
