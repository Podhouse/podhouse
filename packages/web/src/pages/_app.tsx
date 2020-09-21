import React from "react";
import App from "next/app";
import { appWithTranslation } from "i18n";

import "keen-slider/keen-slider.min.css";

import Provider from "src/components/Provider/Provider";

class MyApp extends App<{ Component: any }, any> {
  render() {
    const { Component, pageProps } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <Provider>{page}</Provider>);

    return getLayout(<Component {...pageProps} />);
  }
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
