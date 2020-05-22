import React, { useContext } from "react";

import useAuth from "../../hooks/useAuth";

const AuthContext = React.createContext(undefined);

const AuthProvider = ({ children }) => {
  const { auth, handleAuth, logoutAuth, send } = useAuth();

  const data = [auth, handleAuth, logoutAuth, send];

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
