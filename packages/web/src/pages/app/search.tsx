import * as React from "react";

import Provider from "src/provider/";

import Search from "src/modules/App/Search/Search";

const Index = () => <Search />;

Index.getLayout = page => <Provider name="Search">{page}</Provider>

export default Index;
