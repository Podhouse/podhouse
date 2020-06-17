import * as React from "react";
import App from 'next/app'

import Provider from "src/provider/";

class MyApp extends App<{ Component: any }, any> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  
  render() {
    const { Component, pageProps } = this.props

    const getLayout =
      Component.getLayout || (page => <Provider children={page} {...pageProps} />)

    return getLayout(<Component {...pageProps} />)
  }
}

export default MyApp;

