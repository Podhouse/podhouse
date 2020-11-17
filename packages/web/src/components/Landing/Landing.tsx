import React from "react";
import Head from "next/head";
import { Global } from "@emotion/react";

import { LandingContainer, LandingInnerContainer } from "./Landing.styles";

import Header from "src/components/Landing/Header/Header";
import Footer from "src/components/Landing/Footer/Footer";

import ThemeProvider from "src/system/ThemeProvider";
import reset from "src/system/reset";

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => (
  <>
    <ThemeProvider>
      <LandingContainer>
        <LandingInnerContainer>
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
        </LandingInnerContainer>
      </LandingContainer>
    </ThemeProvider>
    <Global styles={reset} />
  </>
);

export const getLayout = (page) => <Landing>{page}</Landing>;

export default Landing;
