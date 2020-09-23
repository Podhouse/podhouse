import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Kids from "src/modules/App/Genres/Kids/Kids";

const Index = () => <Kids />;

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
