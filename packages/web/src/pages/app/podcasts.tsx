import React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Podcasts from "src/modules/App/Podcasts/Podcasts";

const Index = () => <Podcasts />;

Index.getLayout = getLayout;

export default Index;
