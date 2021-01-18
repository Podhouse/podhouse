import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";

import {
  WhatsNewContainer,
  WhatsNewContainerHeaderContainer,
  WhatsNewUpdatesContainer,
  WhatsNewUpdateItemContainer,
} from "./WhatsNew.styles";

const WhatsNew = () => (
  <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
    <WhatsNewContainer>
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
            The launching of the app is getting near and the future features and
            updates for the app are being mapped.
            <br />
            <br />
            There are still a lot of new features that users should expect that
            will be available in the next couple of months on the app, right now
            we are focusing only on the essential features that users should
            have in order to listen to their favorite podcasts on the app.
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

export default WhatsNew;
