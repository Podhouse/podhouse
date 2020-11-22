export type SettingsContext = {};

export type SettingsStateSchema = {
  states: {
    close: {};
    open: {};
  };
};

export type SettingsEvent = { type: "OPEN" } | { type: "CLOSE" };
