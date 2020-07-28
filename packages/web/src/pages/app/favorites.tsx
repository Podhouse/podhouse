import * as React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Favorites from "src/modules/App/Favorites/Favorites";

const Index = () => <Favorites />;

Index.getLayout = getLayout;

export default Index;
