import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Home from "src/modules/Landing/Home/Home";

const Index = () => <Home />;

Index.getLayout = getLayout;

Index.getInitialProps = async () => ({
  namespacesRequired: [
    "common",
    "getstarted",
    "header",
    "menu",
    "player",
    "podcast",
    "settings",
  ],
});

export default Index;
