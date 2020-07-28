import { Machine } from "xstate";

import {
  ShortcutsContext,
  ShortcutsStateSchema,
  ShortcutsEvent,
} from "./Shortcuts.types";

const Shortcuts = Machine<
  ShortcutsContext,
  ShortcutsStateSchema,
  ShortcutsEvent
>({
  id: "shortcuts",
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

export default Shortcuts;
