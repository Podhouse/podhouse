export type RateContext = {};

export type RateStateSchema = {
  states: {
    close: {};
    open: {};
  };
};

export type RateEvent = { type: "OPEN" } | { type: "CLOSE" };
