export type QueueContext = {};

export type QueueStateSchema = {
  states: {
    close: {};
    open: {};
  };
};

export type QueueEvent = { type: "OPEN" } | { type: "CLOSE" };
