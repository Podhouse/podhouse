import React from "react";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Dashboard from "./Dashboard/Dashboard";
import Player from "./Player/Player";

import AuthModal from "../AuthModal/AuthModal";
import SettingsModal from "../SettingsModal/SettingsModal";

import { useAuthContext } from "../../context/Auth/Auth";
import { useSettingsContext } from "../../context/Settings/Settings";

import { AppContainer } from "./App.styles";

interface AppProps {
  children: any;
}

const App: React.FC<AppProps> = ({ children }) => {
  const [auth, handleAuth, logoutAuth] = useAuthContext();
  const [settings, handleSettings] = useSettingsContext();

  const renderAuthModal = () => {
    if (auth.matches("open")) {
      return <AuthModal auth={auth} handleAuth={handleAuth} />;
    }
    return null;
  };

  const renderSettingsModal = () => {
    if (auth.matches("loggedIn")) {
      if (settings.matches("open")) {
        return (
          <SettingsModal
            logoutAuth={logoutAuth}
            handleSettings={handleSettings}
          />
        );
      }
    }
    return null;
  };

  return (
    <>
      {renderAuthModal()}
      {renderSettingsModal()}

      <AppContainer>
        <Header />
        <Menu />
        <Dashboard>{children}</Dashboard>
        <Player />
      </AppContainer>
    </>
  );
};

export default App;
