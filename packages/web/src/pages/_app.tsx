import React from "react";
import App from "next/app";
import { appWithTranslation } from "i18n";

import "keen-slider/keen-slider.min.css";

import Provider from "src/components/Provider/Provider";

const MyApp = ({ Component, pageProps }: any) => {
  const getLayout =
    Component.getLayout || ((page) => <Provider>{page}</Provider>);

  return getLayout(<Component {...pageProps} />);
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
