import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import History from "src/modules/App/Genres/History/History";

const Index = () => <History />;

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
