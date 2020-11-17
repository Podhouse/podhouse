import { useCallback } from "react";
import { useRouter } from "next/router";

export const TOKEN_KEY = "reacteurope";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const updateToken = (token = "") => {
  if (!token || token === "" || token === null) {
    localStorage.removeItem(TOKEN_KEY);
  } else {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const useLogout = () => {
  const history = useRouter();

  const logout = useCallback(() => {
    updateToken("");

    history.push("/app");
  }, [history]);

  return [logout];
};
