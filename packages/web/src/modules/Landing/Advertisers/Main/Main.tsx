import * as React from "react";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingTitle,
  LandingParagraph,
} from "../../Landing.styles";

const Main = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingTitle>
        Reach highly engaged podcast listeners with us
      </LandingTitle>
      <LandingParagraph>
        Podcast listeners are very highly engaged, you can grow your audience by
        advertising with us.
      </LandingParagraph>
    </LandingGridContentContainer>
  </LandingGridContainer>
);

export default Main;
