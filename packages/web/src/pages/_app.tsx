import * as React from "react";
import App from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "../system/theme";
import reset from "../system/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

class MyApp extends App<unknown, unknown> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <GlobalStyle />
      </>
    );
  }
}

export default MyApp;
