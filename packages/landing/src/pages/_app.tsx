import React, { useEffect } from "react";
import App from "next/app";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";

import Landing from "src/components/Landing/Landing";

const MyApp = ({ Component, pageProps }: any) => {
  const router = useRouter();

  const getLayout =
    Component.getLayout || ((page) => <Landing>{page}</Landing>);

  useEffect(() => {
    Fathom.load(process.env.FATHOM_ID, {
      includedDomains: ["podhouse.app"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return getLayout(<Component {...pageProps} />);
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
