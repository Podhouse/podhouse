import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import { useLocation } from "react-router-dom";

import {
  WhatsNewContainer,
  WhatsNewContainerHeaderContainer,
  WhatsNewUpdatesContainer,
  WhatsNewUpdateItemContainer,
} from "./WhatsNew.styles";

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
              January 2021
            </Heading>
            <Text color="#101010" lineHeight="25px" textAlign="start">
              The launching of the app is getting near and the future features
              and updates for the app are being mapped.
              <br />
              <br />
              There are still a lot of new features that users should expect
              that will be available in the next couple of months on the app,
              right now we are focusing only on the essential features that
              users should have in order to listen to their favorite podcasts on
              the app.
              <br />
              <br />
              Don't worry, we are working super hard to get there and make this
              app the best web app for you to listen to your favorite podcasts.
            </Text>
          </WhatsNewUpdateItemContainer>
        </WhatsNewUpdatesContainer>
      </WhatsNewContainer>
    </Scrollbars>
  );
};
export default WhatsNew;
