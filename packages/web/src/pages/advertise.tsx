import * as React from "react";

import Landing from "../components/Landing/Landing";

import Advertise from "../modules/Landing/Advertise/Advertise";

const Index = () => <Advertise />;

Index.getLayout = page => <Landing>{page}</Landing>

export default Index;
