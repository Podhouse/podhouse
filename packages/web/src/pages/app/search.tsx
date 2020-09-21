import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Search from "src/modules/App/Search/Search";

const Index = () => <Search />;

Index.getLayout = getLayout;

export default Index;
