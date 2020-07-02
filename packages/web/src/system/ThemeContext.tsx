import { createContext } from "react";

const defaultContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = createContext(defaultContextData);

export default ThemeContext;
