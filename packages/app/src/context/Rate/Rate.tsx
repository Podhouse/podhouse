import React, { useContext } from "react";

import useRate from "src/hooks/useRate";

const RateContext = React.createContext(undefined as any);

const RateProvider = ({ children }: any) => {
  const { rate, handleRate } = useRate();

  const data = [rate, handleRate];

  return <RateContext.Provider value={data}>{children}</RateContext.Provider>;
};

const useRateContext = () => {
  const context = useContext(RateContext);
  if (context === undefined) {
    throw new Error("useRate can only be used inside RateProvider");
  }
  return context;
};

export { RateProvider, useRateContext };
