import React from "react";
import Head from "next/head";
import { withTranslation } from "i18n";

import ErrorPage from "src/components/ErrorPage/ErrorPage";

const Home = () => (
  <>
    <Head>
      <title>404</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ErrorPage title="Ops" description="Something went wrong" />
  </>
);

Home.getInitialProps = async () => ({ namespacesRequired: ["common"] });

export default withTranslation("common")(Home);
