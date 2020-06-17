import * as React from "react";
import App from 'next/app'

const Noop = ({ children }) => children;

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
    const Layout = Component.Layout || Noop

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp;

