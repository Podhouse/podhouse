import React from "react";
import Head from "next/head";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import AuthModal from "src/components/AuthModal/AuthModal";
import SettingsModal from "src/components/SettingsModal/SettingsModal";
import ShortcutsModal from "src/components/ShortcutsModal/ShortcutsModal";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";

import useShortcuts from "src/hooks/useShortcuts";

import { AppContainer } from "./App.styles";

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  const [auth, handleAuth, logoutAuth] = useAuthContext();
  const [settings, handleSettings] = useSettingsContext();
  const { shortcuts, handleShortcuts } = useShortcuts();

  const renderAuthModal = () => {
    if (auth.matches("open")) {
      return <AuthModal auth={auth} handleAuth={handleAuth} />;
    }

    return null;
  };

  const renderShortcutsModal = () => {
    if (shortcuts.matches("open")) {
      return <ShortcutsModal handleShortcuts={handleShortcuts} />;
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
            handleShortcuts={handleShortcuts}
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
        {renderShortcutsModal()}

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

export default App;
