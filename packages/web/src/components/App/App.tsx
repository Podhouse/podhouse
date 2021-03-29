import React from "react";
import { Switch, Route } from "react-router-dom";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import Browse from "src/modules/App/Browse/Browse";
import Search from "src/modules/App/Search/Search";
import Subscriptions from "src/modules/App/Subscriptions/Subscriptions";
import Favorites from "src/modules/App/Favorites/Favorites";
import Filters from "src/modules/App/Filters/Filters";
import Podcast from "src/modules/App/Podcast/Podcast";
import Episode from "src/modules/App/Episode/Episode";
import Genre from "src/modules/App/Genre/Genre";
import Settings from "src/modules/App/Settings/Settings";
import Advertise from "src/modules/App/Advertise/Advertise";

import AuthModal from "src/components/Modals/AuthModal/AuthModal";
import SettingsModal from "src/components/Modals/SettingsModal/SettingsModal";
import QueueModal from "src/components/Modals/QueueModal/QueueModal";
import RateModal from "src/components/Modals/RateModal/RateModal";

const App = () => {
  return (
    <AppContainer>
      <Dashboard>
        <Switch>
          <Route exact path="/" component={Browse} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/filters" component={Filters} />
          <Route exact path="/podcast/:id/:id" component={Podcast} />
          <Route exact path="/episode/:id/:id" component={Episode} />
          <Route exact path="/genre/:id" component={Genre} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/advertise" component={Advertise} />
        </Switch>
      </Dashboard>
      <Header />
      <Player />
      <Menu />
    </AppContainer>
  );
};

export default App;
