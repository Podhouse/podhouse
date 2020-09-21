import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Settings from "src/modules/App/Settings/Settings";

const Index = () => <Settings />;

Index.getLayout = getLayout;

export default Index;
