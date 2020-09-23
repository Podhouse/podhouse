import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Society from "src/modules/App/Genres/Society/Society";

const Index = () => <Society />;

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
