import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Religion from "src/modules/App/Genres/Religion/Religion";

const Index = () => <Religion />;

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
