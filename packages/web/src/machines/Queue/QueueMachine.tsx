import { Machine } from "xstate";

import { QueueContext, QueueStateSchema, QueueEvent } from "./Queue.types";

const QueueMachine = Machine<QueueContext, QueueStateSchema, QueueEvent>({
  id: "queue",
  initial: "close",
  states: {
    close: {
      on: {
        OPEN: "open",
      },
    },
    open: {
      on: {
        CLOSE: "close",
      },
    },
  },
});

export default QueueMachine;
