import * as React from "react";

import Provider from "src/provider/";

import Settings from "src/modules/App/Settings/Settings";

const Index = () => <Settings />;

Index.getLayout = page => <Provider name="Settings">{page}</Provider>

export default Index;
