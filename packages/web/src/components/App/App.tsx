import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import Browse from "src/modules/App/Browse/Browse";
import Subscriptions from "src/modules/App/Subscriptions/Subscriptions";
import Search from "src/modules/App/Search/Search";
import Favorites from "src/modules/App/Favorites/Favorites";
import Promote from "src/modules/App/Promote/Promote";
import WhatsNew from "src/modules/App/WhatsNew/WhatsNew";
import Settings from "src/modules/App/Settings/Settings";
import Podcast from "src/modules/App/Podcast/Podcast";
import Episode from "src/modules/App/Episode/Episode";
import Genre from "src/modules/App/Genre/Genre";

import AuthModal from "src/components/Modals/AuthModal/AuthModal";
import SettingsModal from "src/components/Modals/SettingsModal/SettingsModal";
import QueueModal from "src/components/Modals/QueueModal/QueueModal";
import RateModal from "src/components/Modals/RateModal/RateModal";

import { useAuthContext } from "src/machines/Auth/AuthContext";
import { useSettingsContext } from "src/machines/Settings/SettingsContext";
import { useQueueContext } from "src/machines/Queue/QueueContext";
import { useRateContext } from "src/machines/Rate/RateContext";

const App = () => {
  const location = useLocation();

  const { auth } = useAuthContext();
  const { settings } = useSettingsContext();
  const { queue } = useQueueContext();
  const { rate, handleRate } = useRateContext();

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
    <>
      {renderAuthModal()}
      {renderSettingsModal()}
      {renderQueueModal()}
      {renderRateModal()}

      <Helmet>
        <title>Podhouse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The best podcast web app to listen to your favorite podcasts"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content="Podhouse" />
        <meta
          property="twitter:description"
          content="The best podcast web app to listen to your favorite podcasts"
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/C1TOvBB.jpg"
        />
        <meta property="twitter:url" content={location.pathname} />

        {/* Open Graph */}
        <meta property="og:url" content={location.pathname} key="ogurl" />
        <meta
          property="og:image"
          content="https://i.imgur.com/C1TOvBB.jpg"
          key="ogimage"
        />
        <meta property="og:site_name" content="Podhouse" key="ogsitename" />
        <meta property="og:title" content="Podhouse" key="ogtitle" />
        <meta
          property="og:description"
          content="The best podcast web app to listen to your favorite podcasts"
          key="ogdesc"
        />
      </Helmet>

      <AppContainer>
        <Dashboard>
          <Switch>
            <Route exact path="/" component={Browse} />
            <Route exact path="/subscriptions" component={Subscriptions} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/promote" component={Promote} />
            <Route exact path="/whats-new" component={WhatsNew} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/podcast/:id/:id" component={Podcast} />
            <Route exact path="/episode/:id" component={Episode} />
            <Route exact path="/genre/:id" component={Genre} />
          </Switch>
        </Dashboard>
        <Header />
        <Player />
        <Menu />
      </AppContainer>
    </>
  );
};

export default App;
