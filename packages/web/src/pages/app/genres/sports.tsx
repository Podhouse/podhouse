import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Sports from "src/modules/App/Genres/Sports/Sports";

const Index = () => <Sports />;

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
