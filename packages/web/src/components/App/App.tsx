import * as React from "react";
import Head from "next/head";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import AuthModal from "../AuthModal/AuthModal";
import SettingsModal from "../SettingsModal/SettingsModal";

import { useAuthContext } from "../../context/Auth/Auth";
import { useSettingsContext } from "../../context/Settings/Settings";

import { AppContainer } from "./App.styles";

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
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
    <div>
      <Head>
        <title>Podhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {renderAuthModal()}
        {renderSettingsModal()}

        <AppContainer>
          <Dashboard>{children}</Dashboard>
          <Header />
          <Player />
          <Menu />
        </AppContainer>
      </>
    </div>
  );
};

export default App

