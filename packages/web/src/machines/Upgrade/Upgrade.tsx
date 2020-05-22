import { Machine } from "xstate";

import {
  UpgradeContext,
  UpgradeStateSchema,
  UpgradeEvent,
} from "./Upgrade.types";

const Upgrade = Machine<UpgradeContext, UpgradeStateSchema, UpgradeEvent>({
  id: "upgrade",
  initial: "monthly",
  states: {
    monthly: {
      on: {
        YEARLY: "yearly",
        UPGRADE: "loading",
      },
    },
    yearly: {
      on: {
        MONTHLY: "monthly",
        UPGRADE: "loading",
      },
    },
    loading: {
      on: {
        SUCCESS: "success",
        ERROR: "error",
      },
    },
    success: {
      type: "final",
    },
    error: {
      on: {
        RETRY: "monthly",
      },
    },
  },
});

export default Upgrade;
