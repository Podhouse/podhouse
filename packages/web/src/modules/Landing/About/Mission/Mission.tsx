import React from "react";

import {
  LandingGridContainer,
  LandingSubTitle,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

const Mission = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>Mission</LandingSubTitle>

      <Paragraph variant="secondary" size="normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus rutrum
        sollicitudin placerat id nisl, sed turpis. Viverra aliquam nibh
        consectetur sed turpis urna. Pellentesque vestibulum at et etiam etiam
        malesuada. Molestie risus mauris elit mus ut varius pulvinar viverra.
        Pellentesque pulvinar metus, maecenas non tempor consectetur imperdiet
        nulla faucibus. Feugiat sem ut quam aliquet est blandit. Nunc posuere
        quisque sagittis eu.
      </Paragraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Mission;
