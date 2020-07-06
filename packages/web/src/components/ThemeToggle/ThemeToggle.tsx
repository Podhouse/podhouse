import React from "react";

import { ToggleContainer } from "./ThemeToggle.styles";

interface ThemeToggleProps {
  dark: boolean;
  onClick: () => void;
}

const ThemeToggle = ({ dark, onClick }: ThemeToggleProps) => {
  const containerClass = dark ? "container dark" : "container";

  return (
    <ToggleContainer>
      <div className={containerClass}>
        <button id="switch" onClick={onClick}>
          <div className="mode"></div>
        </button>
      </div>
    </ToggleContainer>
  );
};

export default ThemeToggle;
