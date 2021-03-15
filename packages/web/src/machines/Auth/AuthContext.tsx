import React, { useContext } from "react";

import useAuth from "src/machines/Auth/useAuth";

const AuthContext = React.createContext(undefined as any);

const AuthProvider = ({ children }: any) => {
  const { current, auth, onOpenAuth, onCloseAuth, send } = useAuth();

  const value = { current, auth, onOpenAuth, onCloseAuth, send };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
