import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Changelog from "src/modules/Landing/Changelog/Changelog";

const Index = () => <Changelog />;

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
