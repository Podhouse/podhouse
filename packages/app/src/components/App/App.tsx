import React from "react";
import { Switch, Route } from "react-router-dom";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

import Home from "src/modules/App/Home/Home";
import Podcasts from "src/modules/App/Podcasts/Podcasts";

import Provider from "src/components/Provider/Provider";

const App = () => {
  return (
    <Provider>
      <AppContainer>
        <Dashboard>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/podcasts" component={Podcasts} />
          </Switch>
        </Dashboard>
        <Header />
        <Player />
        <Menu />
      </AppContainer>
    </Provider>
  );
};

export default App;
