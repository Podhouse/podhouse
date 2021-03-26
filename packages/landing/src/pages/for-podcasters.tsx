import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import ForPodcasters from "src/modules/ForPodcasters/ForPodcasters";

const Index = () => <ForPodcasters />;

Index.getLayout = getLayout;

export default Index;
