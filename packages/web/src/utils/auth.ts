export const TOKEN_KEY = "podhouse";

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
  const logout = () => updateToken("");

  return [logout];
};
