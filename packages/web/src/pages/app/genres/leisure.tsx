import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Leisure from "src/modules/App/Genres/Leisure/Leisure";

const Index = () => <Leisure />;

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
