import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route exact path="/" />

    <Route exact path="/sign-in" />
    <Route exact path="/sign-up" />
    <Route exact path="/forgot-password" />
    <Route exact path="/reset-password" />

    <Route exact path="/podcast/:id" />
    <Route exact path="/episode/:id" />

    <Route exact path="/search" />
    <Route exact path="/subscriptions" />
    <Route exact path="/favorites" />
    <Route exact path="/filters" />

    <Route exact path="/settings" />
    <Route exact path="/settings/password" />
    <Route exact path="/settings/about" />
    <Route exact path="/settings/faq" />
    <Route exact path="/settings/feedback" />
    <Route exact path="/settings/privacy" />
    <Route exact path="/settings/terms" />

    <Route exact path="/advertise" />
  </Switch>
);
