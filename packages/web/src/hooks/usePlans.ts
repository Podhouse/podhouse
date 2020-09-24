import { useMachine } from "@xstate/react";

import Plans from "src/machines/Plans/Plans";

interface IPlan {
  category: string;
  price: number;
  available: number;
  taps: number;
  subscriptions: number;
}

const usePlans = () => {
  const [current, send] = useMachine(Plans);

  const handleSelect = (plan: IPlan) => {
    if (current.matches("idle")) {
      send("SELECT", { selected: true, plan });
    } else {
      const selectedPlan: IPlan = current.context.plan;

      if (selectedPlan === plan) {
        send("UNSELECT", { selected: false, plan: null, info: null });
      } else {
        send("SELECT", { selected: true, plan });
      }
    }
  };

  const onCheckout = () => {
    if (current.matches("select")) {
      send("CHECKOUT");
    }
  };

  return {
    current,
    handleSelect,
    onCheckout,
    send,
  };
};

export default usePlans;
