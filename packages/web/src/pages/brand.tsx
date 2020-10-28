import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Brand from "src/modules/Landing/Brand/Brand";

const Index = () => <Brand />;

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
