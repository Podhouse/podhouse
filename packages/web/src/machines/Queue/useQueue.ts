import { useMachine } from "@xstate/react";

import QueueMachine from "src/machines/Queue/QueueMachine";

const useQueue = () => {
  const [current, send] = useMachine(QueueMachine);

  const handleQueue = () => {
    if (current.matches("close")) {
      send("OPEN");
    } else {
      send("CLOSE");
    }
  };

  return { queue: current, handleQueue };
};

export default useQueue;
