import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Government from "src/modules/App/Genres/Government/Government";

const Index = () => <Government />;

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
