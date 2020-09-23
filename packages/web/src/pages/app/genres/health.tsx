import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Health from "src/modules/App/Genres/Health/Health";

const Index = () => <Health />;

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
