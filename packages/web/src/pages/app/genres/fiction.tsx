import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Fiction from "src/modules/App/Genres/Fiction/Fiction";

const Index = () => <Fiction />;

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
