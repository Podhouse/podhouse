import React, { Fragment } from "react";
import { Global } from "@emotion/core";

import Header from "src/components/Landing/Header/Header";
import Footer from "src/components/Landing/Footer/Footer";

import { LandingContainer } from "./Landing.styles";

import ThemeProvider from "src/system/ThemeProvider";
import reset from "src/system/reset";

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => (
  <Fragment>
    <ThemeProvider>
      <LandingContainer>
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
