import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Business from "src/modules/App/Genres/Business/Business";

const Index = () => <Business />;

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
