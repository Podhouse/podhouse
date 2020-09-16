import React from "react";

import { getLayout } from "src/components/Landing/Landing";

import Changelog from "src/modules/Landing/Changelog/Changelog";

const Index = () => <Changelog />;

Index.getLayout = getLayout;

export default Index;
