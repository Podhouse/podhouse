import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import About from "src/modules/Landing/About/About";

const Index = () => <About />;

Index.getLayout = getLayout;

export default Index;
