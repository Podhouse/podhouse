import React from "react";
import App from "next/app";

import Provider from "src/components/Provider/Provider";

class MyApp extends App<{ Component: any }, any> {
  render() {
    const { Component, pageProps } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <Provider>{page}</Provider>);

    return getLayout(<Component {...pageProps} />);
  }
}

export default MyApp;
