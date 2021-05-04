import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

import { AppContainer } from "./App.styles";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Player from "./Player/Player";
import Dashboard from "./Dashboard/Dashboard";

const Browse = lazy(() => import("src/modules/App/Browse/Browse"));

const SignIn = lazy(() => import("src/modules/App/SignIn/SignIn"));
const SignUp = lazy(() => import("src/modules/App/SignUp/SignUp"));
const ForgotPassword = lazy(
  () => import("src/modules/App/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(
  () => import("src/modules/App/ResetPassword/ResetPassword")
);

const Podcast = lazy(() => import("src/modules/App/Podcast/Podcast"));
const Episode = lazy(() => import("src/modules/App/Episode/Episode"));
const Genre = lazy(() => import("src/modules/App/Genre/Genre"));

const Search = lazy(() => import("src/modules/App/Search/Search"));
const Subscriptions = lazy(
  () => import("src/modules/App/Subscriptions/Subscriptions")
);
const Favorites = lazy(() => import("src/modules/App/Favorites/Favorites"));
const Filters = lazy(() => import("src/modules/App/Filters/Filters"));

const Settings = lazy(() => import("src/modules/App/Settings/Settings"));
const Advertise = lazy(() => import("src/modules/App/Advertise/Advertise"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AppContainer>
        <Dashboard>
          <Switch>
            <Route exact path="/" component={Browse} />

            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />

            <Route exact path="/podcast/:id" component={Podcast} />
            <Route exact path="/episode/:id" component={Episode} />
            <Route exact path="/genre/:id" component={Genre} />

            <Route exact path="/search" component={Search} />
            <Route exact path="/subscriptions" component={Subscriptions} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/filters" component={Filters} />

            <Route exact path="/settings" component={Settings} />
            <Route exact path="/settings/account" component={Settings} />
            <Route exact path="/settings/password" component={Settings} />
            <Route exact path="/settings/about" component={Settings} />
            <Route exact path="/settings/support" component={Settings} />

            <Route exact path="/advertise" component={Advertise} />
          </Switch>
        </Dashboard>
        <Header />
        <Player />
        <Menu />
      </AppContainer>
    </Suspense>
  );
};

export default App;
