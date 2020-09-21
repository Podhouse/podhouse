import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Episode from "src/modules/App/Episode/Episode";

const Index = () => <Episode />;

Index.getLayout = getLayout;

export default Index;
