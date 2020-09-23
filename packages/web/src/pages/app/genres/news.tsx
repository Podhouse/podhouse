import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import News from "src/modules/App/Genres/News/News";

const Index = () => <News />;

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
