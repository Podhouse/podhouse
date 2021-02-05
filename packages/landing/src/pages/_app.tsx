import React from "react";
import App from "next/app";
import Router from "next/router";
import withGA from "next-ga";

import Landing from "src/components/Landing/Landing";

const MyApp = ({ Component, pageProps }: any) => {
  const getLayout =
    Component.getLayout || ((page) => <Landing>{page}</Landing>);

  return getLayout(<Component {...pageProps} />);
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default withGA(`${process.env.GOOGLE_ID}`, Router)(MyApp);
