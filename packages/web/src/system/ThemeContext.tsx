import { createContext } from "react";

interface ContextData {
  dark: boolean;
  toggle: () => void;
}

const defaultContextData: ContextData = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = createContext(defaultContextData);

export default ThemeContext;
