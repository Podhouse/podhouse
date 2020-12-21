import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import { LandingContainer, LandingInnerContainer } from "./Landing.styles";

import Header from "src/components/Landing/Header/Header";
import Footer from "src/components/Landing/Footer/Footer";

import theme from "src/system/theme";

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => (
  <ChakraProvider theme={theme}>
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
  </ChakraProvider>
);

export const getLayout = (page) => <Landing>{page}</Landing>;

export default Landing;
