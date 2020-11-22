import { Machine } from "xstate";

import { ToggleContext, ToggleStateSchema, ToggleEvent } from "./Toggle.types";

const Toggle = Machine<ToggleContext, ToggleStateSchema, ToggleEvent>({
  id: "toggle",
  initial: "unchecked",
  states: {
    unchecked: {
      on: {
        CHECK: "checked",
      },
    },
    checked: {
      on: {
        UNCHECK: "unchecked",
      },
    },
  },
});

export default Toggle;
