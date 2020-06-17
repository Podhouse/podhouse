import * as React from "react";

import Landing from "../components/Landing/Landing";

import Home from "../modules/Landing/Home/Home";

const Index = () => <Home />;

Index.getLayout = page => <Landing>{page}</Landing>

export default Index;
