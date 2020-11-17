import React, { useState, useEffect } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import ThemeContext from "./ThemeContext";
import theme from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState<any>({
    dark: false,
    hasThemeMounted: false,
  });
  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, []);

  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme("dark") : theme("light");

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          dark: themeState.dark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
