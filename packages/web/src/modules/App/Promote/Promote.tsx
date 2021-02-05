import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import ReactGA from "react-ga";

import {
  PromoteContainer,
  PromoteContainerHeaderContainer,
} from "./Promote.styles";

ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_ID}`);
ReactGA.pageview(window.location.pathname + window.location.search);

const Promote = () => {
  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <PromoteContainer>
        <PromoteContainerHeaderContainer>
          <Heading
            color="#101010"
            as="h1"
            fontSize={36}
            letterSpacing="-0.03em"
            textAlign="start"
          >
            Promote on Podhouse
          </Heading>

          <Text color="#101010" lineHeight="25px" textAlign="start">
            Here you can find the latest updates on Podhouse and check the new
            features that landed on the app
          </Text>
        </PromoteContainerHeaderContainer>
      </PromoteContainer>
    </Scrollbars>
  );
};

export default Promote;
