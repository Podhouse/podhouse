import * as React from "react";

import Provider from "src/provider/";

import Episode from "src/modules/App/Episode/Episode";

const Index = () => <Episode />;

Index.getLayout = page => <Provider name="Episode">{page}</Provider>

export default Index;
