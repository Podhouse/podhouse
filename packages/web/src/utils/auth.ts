import { useEffect, useState } from "react";

export const TOKEN_KEY = "podhouse";

export const useToken = () => {
  const [token, setToken] = useState<string>();
  useEffect(() => {
    setInterval(() => {
      setToken(getToken());
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);
  return { token };
};

export const getToken = (): string => {
  const currentToken = localStorage.getItem(TOKEN_KEY);
  return currentToken ? currentToken : "";
};

export const updateToken = (token: string | null = "") => {
  if (!token || token === "" || token === null) {
    localStorage.removeItem(TOKEN_KEY);
  } else {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const useLogout = () => {
  const onLogout = () => updateToken("");

  return { onLogout };
};
