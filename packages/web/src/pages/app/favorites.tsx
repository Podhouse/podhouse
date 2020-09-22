import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Favorites from "src/modules/App/Favorites/Favorites";

const Index = () => <Favorites />;

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
