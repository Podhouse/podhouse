import { Machine } from "xstate";

import { RateContext, RateStateSchema, RateEvent } from "./Rate.types";

const Rate = Machine<RateContext, RateStateSchema, RateEvent>({
  id: "rate",
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

export default Rate;
