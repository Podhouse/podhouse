import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import TV from "src/modules/App/Genres/TV/TV";

const Index = () => <TV />;

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
