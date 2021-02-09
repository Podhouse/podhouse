import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/subscriptions" />
    <Route exact path="/search" />
    <Route exact path="/favorites" />
    <Route exact path="/promote" />
    <Route exact path="/whats-new" />
    <Route exact path="/settings" />
    <Route exact path="/podcast/:id/:id" />
    <Route exact path="/episode/:id/:id" />
    <Route exact path="/genre/:id" />
  </Switch>
);
