import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Search from "src/modules/App/Search/Search";

const Index = () => <Search />;

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
