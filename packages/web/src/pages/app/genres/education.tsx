import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Education from "src/modules/App/Genres/Education/Education";

const Index = () => <Education />;

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
