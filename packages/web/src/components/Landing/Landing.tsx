import React, { Fragment } from "react";
import Head from "next/head";
import { Global } from "@emotion/core";

import { LandingContainer } from "./Landing.styles";

import Header from "src/components/Landing/Header/Header";
import Footer from "src/components/Landing/Footer/Footer";

import ThemeProvider from "src/system/ThemeProvider";
import reset from "src/system/reset";

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => (
  <Fragment>
    <ThemeProvider>
      <LandingContainer>
        <Head>
          <title>Podhouse</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />
        {children}
        <Footer />
      </LandingContainer>
    </ThemeProvider>
    <Global styles={reset} />
  </Fragment>
);

export const getLayout = (page) => <Landing>{page}</Landing>;

export default Landing;
