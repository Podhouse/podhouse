import * as React from "react";

import Provider from "src/provider/";

import Podcast from "src/modules/App/Podcast/Podcast";

const Index = () => <Podcast />;

Index.getLayout = page => <Provider name="Podcast">{page}</Provider>

export default Index;
