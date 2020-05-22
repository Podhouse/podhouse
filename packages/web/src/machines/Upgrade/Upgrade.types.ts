export type UpgradeContext = {};

export type UpgradeStateSchema = {
  states: {
    monthly: {};
    yearly: {};
    loading: {};
    success: {};
    error: {};
  };
};

export type UpgradeEvent =
  | { type: "YEARLY" }
  | { type: "MONTHLY" }
  | { type: "UPGRADE" }
  | { type: "SUCCESS" }
  | { type: "ERROR" }
  | { type: "RETRY" };
