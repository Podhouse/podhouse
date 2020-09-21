import React from "react";
import Head from "next/head";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import AuthModal from "src/components/Modals/AuthModal/AuthModal";
import SettingsModal from "src/components/Modals/SettingsModal/SettingsModal";
import QueueModal from "src/components/Modals/QueueModal/QueueModal";
import RateModal from "src/components/Modals/RateModal/RateModal";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";
import { useQueueContext } from "src/context/Queue/Queue";
import { useRateContext } from "src/context/Rate/Rate";

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  const [auth, handleAuth, logoutAuth] = useAuthContext();
  const [settings, handleSettings] = useSettingsContext();
  const [queue, handleQueue] = useQueueContext();
  const [rate, handleRate] = useRateContext();

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

  const renderQueueModal = () => {
    if (queue.matches("open")) {
      return <QueueModal handleQueue={handleQueue} />;
    }
    return null;
  };

  const renderRateModal = () => {
    if (rate.matches("open")) {
      return <RateModal handleRate={handleRate} />;
    }
    return null;
  };

  return (
    <div>
      <Head>
        <title>Podhouse</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <>
        {renderAuthModal()}
        {renderSettingsModal()}
        {renderQueueModal()}
        {renderRateModal()}

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
