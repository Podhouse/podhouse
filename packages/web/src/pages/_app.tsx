import React from "react";
import { appWithTranslation } from "i18n";

import "keen-slider/keen-slider.min.css";

import Provider from "src/components/Provider/Provider";

const MyApp = ({ Component, pageProps }: any) => {
  const getLayout =
    Component.getLayout || ((page) => <Provider>{page}</Provider>);

  return getLayout(<Component {...pageProps} />);
};

export default appWithTranslation(MyApp);
