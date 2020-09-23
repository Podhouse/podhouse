import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Arts from "src/modules/App/Genres/Arts/Arts";

const Index = () => <Arts />;

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
