import * as React from "react";

import Landing from "../components/Landing/Landing";

import About from "../modules/Landing/About/About";

const Index = () => <About />;

Index.getLayout = page => <Landing>{page}</Landing>

export default Index;
