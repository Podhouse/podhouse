export interface Plan {
  category: string;
  price: number;
  available: number;
  taps: number;
  subscriptions: number;
}

export type PlansContext = {
  selected: boolean;
  plan: Plan | null;
  info: {
    podcast: {};
    description: string;
  } | null;
};

export type PlansStateSchema = {
  states: {
    idle: {};
    select: {};
    success: {};
  };
};

export type PlansSelectEvent = {
  type: "SELECT";
  selected: boolean;
  plan: Plan;
};

export type PlansCheckoutEvent = {
  type: "CHECKOUT";
  selected: boolean;
  plan: Plan;
  info: {
    podcast: {};
    description: string;
  };
};

export type PlansUnselectEvent = {
  type: "UNSELECT";
  selected: boolean;
  plan: null;
  info: null;
};

export type PlansEvent =
  | PlansSelectEvent
  | PlansCheckoutEvent
  | PlansUnselectEvent;
