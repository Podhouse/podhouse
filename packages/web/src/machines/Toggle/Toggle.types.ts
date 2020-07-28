export type ToggleContext = {};

export type ToggleStateSchema = {
  states: {
    checked: {};
    unchecked: {};
  };
};

export type ToggleEvent = { type: "CHECK" } | { type: "UNCHECK" };
