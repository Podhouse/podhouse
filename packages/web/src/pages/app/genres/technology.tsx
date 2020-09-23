import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Technology from "src/modules/App/Genres/Technology/Technology";

const Index = () => <Technology />;

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
