import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Browse from "src/modules/App/Browse/Browse";

const Index = () => <Browse />;

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
