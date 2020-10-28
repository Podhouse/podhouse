import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Comedy from "src/modules/App/Genres/Comedy/Comedy";

const Index = () => <Comedy />;

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
