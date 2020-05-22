export type AuthContext = {};

export type AuthStateSchema = {
  states: {
    idle: {};
    open: {};
    loading: {};
    loggedIn: {};
  };
};

export type AuthEvent =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "SUBMIT" }
  | { type: "SUCCESS" }
  | { type: "ERROR" }
  | { type: "LOGOUT" };
