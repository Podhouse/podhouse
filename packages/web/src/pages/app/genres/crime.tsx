import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Crime from "src/modules/App/Genres/Crime/Crime";

const Index = () => <Crime />;

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
