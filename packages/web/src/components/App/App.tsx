import React from "react";
import { Switch, Route } from "react-router-dom";
import { RelayEnvironmentProvider } from "relay-hooks";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import Browse from "src/modules/App/Browse/Browse";
import Subscriptions from "src/modules/App/Subscriptions/Subscriptions";
import Favorites from "src/modules/App/Favorites/Favorites";
import Settings from "src/modules/App/Settings/Settings";
import Podcast from "src/modules/App/Podcast/Podcast";
import Episode from "src/modules/App/Episode/Episode";
import Genres from "src/modules/App/Genres/Genres";

import AuthModal from "src/components/Modals/AuthModal/AuthModal";
import SettingsModal from "src/components/Modals/SettingsModal/SettingsModal";
import QueueModal from "src/components/Modals/QueueModal/QueueModal";
import RateModal from "src/components/Modals/RateModal/RateModal";

import { useAuthContext } from "src/context/Auth/Auth";
import { useSettingsContext } from "src/context/Settings/Settings";
import { useQueueContext } from "src/context/Queue/Queue";
import { useRateContext } from "src/context/Rate/Rate";

import RelayEnvironment from "src/relay/RelayEnvironment";

const App = () => {
  const [, auth] = useAuthContext();
  const [settings] = useSettingsContext();
  const [queue] = useQueueContext();
  const [rate, handleRate] = useRateContext();

  const renderAuthModal = () => {
    if (auth === true) {
      return <AuthModal />;
    }
    return null;
  };

  const renderSettingsModal = () => {
    if (settings.matches("open")) {
      return <SettingsModal />;
    }
    return null;
  };

  const renderQueueModal = () => {
    if (queue.matches("open")) {
      return <QueueModal />;
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
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      {renderAuthModal()}
      {renderSettingsModal()}
      {renderQueueModal()}
      {renderRateModal()}

      <AppContainer>
        <Dashboard>
          <Switch>
            <Route exact path="/" component={Browse} />
            <Route exact path="/subscriptions" component={Subscriptions} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/podcast" component={Podcast} />
            <Route exact path="/episode" component={Episode} />
            <Route exact path="/genres" component={Genres} />
          </Switch>
        </Dashboard>
        <Header />
        <Player />
        <Menu />
      </AppContainer>
    </RelayEnvironmentProvider>
  );
};

export default App;
