import React, { Fragment } from "react";

import CallToAction from "../CallToAction/CallToAction";

import Main from "./Main/Main";
import Download from "./Download/Download";

const Brand = () => (
  <Fragment>
    <Main />
    <Download />
    <CallToAction />
  </Fragment>
);

export default Brand;
