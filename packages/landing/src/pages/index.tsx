import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Home from "src/modules/Home/Home";

const Index = () => <Home />;

Index.getLayout = getLayout;

export default Index;
