import { Machine, assign } from "xstate";

import {
  PlansContext,
  PlansStateSchema,
  PlansEvent,
  PlansSelectEvent,
  PlansCheckoutEvent,
  PlansUnselectEvent,
} from "./Plans.types";

const Plans = Machine<PlansContext, PlansStateSchema, PlansEvent>(
  {
    id: "plans",
    initial: "idle",
    context: {
      selected: false,
      plan: null,
      info: null,
    },
    states: {
      idle: {
        on: {
          SELECT: {
            target: "select",
            actions: "onSelect",
          },
        },
      },
      select: {
        on: {
          SELECT: {
            target: "",
            actions: "onSelect",
          },
          UNSELECT: {
            target: "idle",
            actions: "onUnselect",
          },
          CHECKOUT: {
            target: "success",
            actions: "onCheckout",
          },
        },
      },
      success: {
        type: "final",
      },
    },
  },
  {
    actions: {
      onSelect: assign<PlansContext, any>({
        selected: (_, event) => (event as PlansSelectEvent).selected,
        plan: (_, event) => (event as PlansSelectEvent).plan,
      }),
      onUnselect: assign<PlansContext, any>({
        selected: (_, event) => (event as PlansUnselectEvent).selected,
        plan: (_, event) => (event as PlansUnselectEvent).plan,
        info: (_, event) => (event as PlansUnselectEvent).info,
      }),
      onCheckout: assign<PlansContext, any>({
        selected: (_, event) => (event as PlansCheckoutEvent).selected,
        plan: (_, event) => (event as PlansCheckoutEvent).plan,
        info: (_, event) => (event as PlansCheckoutEvent).info,
      }),
    },
  }
);

export default Plans;
