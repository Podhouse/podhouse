import * as React from "react";

import {
  PremiumContainer,
  PremiumAvailableContainer,
  PremiumAvailableText,
  PremiumTitle,
  PremiumItemsContainer,
  PremiumItemContainer,
  PremiumItemTitle,
  PremiumItemText,
} from "./Premium.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "src/components/Landing/Landing.styles";

const Premium = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>
        Listen to your favorite podcasts for free
      </LandingSubTitle>

      <LandingParagraph>
        We're a free podcast app, but in the future will provide some premium
        features to improve your experience.
      </LandingParagraph>
    </LandingGridContentContainer>

    <PremiumContainer>
      <PremiumAvailableContainer>
        <PremiumAvailableText>AVAILABLE SOON</PremiumAvailableText>
      </PremiumAvailableContainer>

      <PremiumTitle>Pro features coming soon...</PremiumTitle>

      <PremiumItemsContainer>
        <PremiumItemContainer>
          <PremiumItemTitle>Exclusive features</PremiumItemTitle>
          <PremiumItemText>
            Get a more sophisticated player with exclusive features such as
            queue, share, trim, etc.
          </PremiumItemText>
        </PremiumItemContainer>

        <PremiumItemContainer>
          <PremiumItemTitle>Bookmarks</PremiumItemTitle>
          <PremiumItemText>
            Save podcasts and episodes for later, don't miss important content
            anymore.
          </PremiumItemText>
        </PremiumItemContainer>

        <PremiumItemContainer>
          <PremiumItemTitle>No ads</PremiumItemTitle>
          <PremiumItemText>
            We don't have any annoying ads but with the premium you'll have the
            best experience without any ads at all.
          </PremiumItemText>
        </PremiumItemContainer>

        <PremiumItemContainer>
          <PremiumItemTitle>Custom themes</PremiumItemTitle>
          <PremiumItemText>
            Style your app the way you want to, changing color and themes.
          </PremiumItemText>
        </PremiumItemContainer>
      </PremiumItemsContainer>
    </PremiumContainer>
  </LandingGridContainer>
);

export default Premium;
