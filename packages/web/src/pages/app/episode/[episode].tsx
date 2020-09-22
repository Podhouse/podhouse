import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Episode from "src/modules/App/Episode/Episode";

const Index = () => <Episode />;

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
