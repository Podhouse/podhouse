import React, { useEffect } from "react";
import App from "next/app";
import { useRouter } from "next/router";

import * as gtag from "../utils/gtag";

import Landing from "src/components/Landing/Landing";

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const getLayout =
    Component.getLayout || ((page) => <Landing>{page}</Landing>);

  return getLayout(<Component {...pageProps} />);
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;