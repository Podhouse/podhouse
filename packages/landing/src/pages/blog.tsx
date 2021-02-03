import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Blog from "src/modules/Blog/Blog";

const Index = () => <Blog />;

Index.getLayout = getLayout;

export default Index;
