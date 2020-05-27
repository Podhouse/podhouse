import React from "react";

import Menu from "./Menu/Menu";

import { AppContainer } from "./App.styles";

interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <AppContainer>
        <Menu />
      </AppContainer>
    </>
  );
};

export default App;
