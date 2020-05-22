import { useMachine } from "@xstate/react";

import Upgrade from "../machines/Upgrade/Upgrade";

const useUpgrade = () => {
  const [current, send] = useMachine(Upgrade);

  const handleMonthly = () => {
    send("MONTHLY");
  };

  const handleYearly = () => {
    send("YEARLY");
  };

  return { upgrade: current, handleMonthly, handleYearly };
};

export default useUpgrade;
