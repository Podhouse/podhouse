import * as React from "react";

import Provider from "src/provider/";

import Browse from "src/modules/App/Browse/Browse";

const Index = () => <Browse />;

Index.getLayout = page => <Provider name="Browse">{page}</Provider>

export default Index;
