import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "src/system/theme";
import reset from "src/system/reset";

import Header from "src/components/Landing/Header/Header";
import Footer from "src/components/Landing/Footer/Footer";

import { LandingContainer } from "./Landing.styles";

const GlobalStyle = createGlobalStyle`${reset}`;

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => (
  <>
    <ThemeProvider theme={theme}>
      <LandingContainer>
        <Header />
        {children}
        <Footer />
      </LandingContainer>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

export const getLayout = (page) => <Landing>{page}</Landing>;

export default Landing;
