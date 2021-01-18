import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { LandingContainer, LandingInnerContainer } from "./Landing.styles";

import Header from "src/components/Landing/Header/Header";
import Footer from "src/components/Landing/Footer/Footer";

import theme from "src/system/theme";

interface LandingProps {
  children: React.ReactNode;
}

const Landing = ({ children }: LandingProps) => {
  const router = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <LandingContainer>
        <LandingInnerContainer>
          <Head>
            <title>Podhouse</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="The best podcast web app to listen to your favorite podcasts"
            />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" key="twcard" />
            <meta
              name="twitter:creator"
              content="@podhouseapp"
              key="twhandle"
            />
            {/* Open Graph */}
            <meta property="og:url" content={router.pathname} key="ogurl" />
            <meta
              property="og:image"
              content={require("../../../public/icon-1200x630.png")}
              key="ogimage"
            />
            <meta property="og:site_name" content="Podhouse" key="ogsitename" />
            <meta property="og:title" content="Podhouse" key="ogtitle" />
            <meta
              property="og:description"
              content="The best podcast web app to listen to your favorite podcasts"
              key="ogdesc"
            />
          </Head>
          <Header />
          {children}
          <Footer />
        </LandingInnerContainer>
      </LandingContainer>
    </ChakraProvider>
  );
};

export const getLayout = (page) => <Landing>{page}</Landing>;

export default Landing;
