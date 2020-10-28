import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Science from "src/modules/App/Genres/Science/Science";

const Index = () => <Science />;

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
