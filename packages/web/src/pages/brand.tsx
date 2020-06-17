import * as React from "react";

import Landing from "../components/Landing/Landing";

import Brand from "../modules/Landing/Brand/Brand";

const Index = () => <Brand />;

Index.getLayout = page => <Landing>{page}</Landing>

export default Index;
