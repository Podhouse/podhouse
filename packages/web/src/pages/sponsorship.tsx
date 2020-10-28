import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Sponsorship from "src/modules/Landing/Sponsorship/Sponsorship";

const Index = () => <Sponsorship />;

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
