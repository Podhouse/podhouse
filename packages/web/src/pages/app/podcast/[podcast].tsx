import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Podcast from "src/modules/App/Podcast/Podcast";

const Index = () => <Podcast />;

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
