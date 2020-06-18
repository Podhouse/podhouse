import * as React from "react";

import { getLayout } from "src/components/Provider/Provider";

import Browse from "src/modules/App/Browse/Browse";

const Index = () => <Browse />;

Index.getLayout = getLayout;

export default Index;
