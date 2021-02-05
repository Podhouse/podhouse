import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

import {
  WhatsNewContainer,
  WhatsNewContainerHeaderContainer,
  WhatsNewUpdatesContainer,
  WhatsNewUpdateItemContainer,
} from "./WhatsNew.styles";

ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ID}`);
ReactGA.pageview(window.location.pathname + window.location.search);

const WhatsNew = () => {
  const location = useLocation();

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <WhatsNewContainer>
        <Helmet>
          <title>What's New</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="The best podcast web app to listen to your favorite podcasts"
          />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta property="twitter:title" content="Podhouse" />
          <meta
            property="twitter:description"
            content="The best podcast web app to listen to your favorite podcasts"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/C1TOvBB.jpg"
          />
          <meta property="twitter:url" content={location.pathname} />

          {/* Open Graph */}
          <meta property="og:url" content={location.pathname} key="ogurl" />
          <meta
            property="og:image"
            content="https://i.imgur.com/C1TOvBB.jpg"
            key="ogimage"
          />
          <meta property="og:site_name" content="Podhouse" key="ogsitename" />
          <meta property="og:title" content="Podhouse" key="ogtitle" />
          <meta
            property="og:description"
            content="The best podcast web app to listen to your favorite podcasts"
            key="ogdesc"
          />
        </Helmet>

        <WhatsNewContainerHeaderContainer>
          <Heading
            color="#101010"
            as="h1"
            fontSize={36}
            letterSpacing="-0.03em"
            textAlign="start"
          >
            What's new on Podhouse
          </Heading>

          <Text color="#101010" lineHeight="25px" textAlign="start">
            Here you can find the latest updates on Podhouse and check the new
            features that landed on the app
          </Text>
        </WhatsNewContainerHeaderContainer>

        <WhatsNewUpdatesContainer>
          <WhatsNewUpdateItemContainer>
            <Heading
              color="#101010"
              as="h2"
              fontSize={24}
              letterSpacing="-0.03em"
              textAlign="start"
            >
              February 2021
            </Heading>
            <Text color="#101010" lineHeight="25px" textAlign="start">
              We are happy to launch the first version of Podhouse after months
              of hard work.
              <br />
              <br />
              There's still a lot of features and updates that we're going to
              make in the app throughout the following months.
              <br />
              <br />
              We will work super hard in the next months to make Podhouse the
              best podcast web app for you to listen to your favorite podcasts.
            </Text>
          </WhatsNewUpdateItemContainer>
        </WhatsNewUpdatesContainer>
      </WhatsNewContainer>
    </Scrollbars>
  );
};
export default WhatsNew;
