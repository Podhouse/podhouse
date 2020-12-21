import React, { useContext } from "react";

import useQueue from "src/machines/Queue/useQueue";

const QueueContext = React.createContext(undefined as any);

const QueueProvider = ({ children }: any) => {
  const { queue, handleQueue } = useQueue();

  const data = { queue, handleQueue };

  return <QueueContext.Provider value={data}>{children}</QueueContext.Provider>;
};

const useQueueContext = () => {
  const context = useContext(QueueContext);
  if (context === undefined) {
    throw new Error("useQueue can only be used inside QueueProvider");
  }
  return context;
};

export { QueueProvider, useQueueContext };
