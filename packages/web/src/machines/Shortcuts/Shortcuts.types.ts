export type ShortcutsContext = {};

export type ShortcutsStateSchema = {
  states: {
    close: {};
    open: {};
  };
};

export type ShortcutsEvent = { type: "OPEN" } | { type: "CLOSE" };
