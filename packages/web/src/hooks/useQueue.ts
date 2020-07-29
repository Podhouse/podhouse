import { useMachine } from "@xstate/react";

import Queue from "src/machines/Queue/Queue";

const useQueue = () => {
  const [current, send] = useMachine(Queue);

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
