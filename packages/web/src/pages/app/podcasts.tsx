import * as React from "react";

import Provider from "src/provider/";

import Podcasts from "src/modules/App/Podcasts/Podcasts";

const Index = () => <Podcasts />;

Index.getLayout = page => <Provider name="Podcasts">{page}</Provider>

export default Index;
