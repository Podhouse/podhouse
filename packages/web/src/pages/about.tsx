import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import About from "src/modules/Landing/About/About";

const Index = () => <About />;

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
