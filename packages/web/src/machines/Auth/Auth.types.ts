export type AuthContext = {};

export type AuthStateSchema = {
  states: {
    idle: {};
    open: {
      states: {
        getstarted: {};
        signin: {};
        signup: {};
        forgot: {};
        reset: {};
        submitting: {};
        success: {};
      };
    };
    loggedIn: {};
  };
};

export type AuthEvent =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "LOGOUT" }
  | { type: "SIGNIN" }
  | { type: "SIGNUP" }
  | { type: "FORGOT" }
  | { type: "RESET" }
  | { type: "SUBMITTING" }
  | { type: "SUCCESS" }
  | { type: "ERROR" };
