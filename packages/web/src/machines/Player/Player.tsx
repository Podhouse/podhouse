import { Machine } from "xstate";

import { AuthContext, AuthStateSchema, AuthEvent } from "./Player.types";

const Auth = Machine<AuthContext, AuthStateSchema, AuthEvent>({
  id: "auth",
  initial: "idle",
  states: {
    idle: {
      on: {
        OPEN: "open",
      },
    },
    open: {
      on: {
        CLOSE: "idle",
        SUBMIT: "loading",
      },
    },
    loading: {
      on: {
        SUCCESS: "loggedIn",
        ERROR: "idle",
      },
    },
    loggedIn: {
      on: {
        LOGOUT: "idle",
      },
    },
  },
});

export default Auth;
