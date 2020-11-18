export type AuthContext = {};

export type AuthStateSchema = {
  states: {
    getstarted: {};
    signin: {};
    signup: {};
    forgot: {};
    reset: {};
    success: {};
  };
};

export type AuthEvent =
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "SIGNIN" }
  | { type: "SIGNUP" }
  | { type: "FORGOT" }
  | { type: "RESET" }
  | { type: "SUCCESS" }
  | { type: "ERROR" };
