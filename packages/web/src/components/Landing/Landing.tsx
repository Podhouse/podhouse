import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { theme } from "src/system/theme";
import reset from "src/system/reset";

const GlobalStyle = createGlobalStyle`${reset}`;

import Header from "src/modules/Landing/Header/Header";
import Footer from "src/modules/Landing/Footer/Footer";

import { LandingContainer } from "./Landing.styles";

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

export default Landing;
