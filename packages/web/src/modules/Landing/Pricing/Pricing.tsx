import * as React from "react";

import {
  PricingContainer,
  PricingAvailableContainer,
  PricingAvailableText,
  PricingTitle,
  PricingItemsContainer,
  PricingItemContainer,
  PricingItemTitle,
  PricingItemText,
} from "./Pricing.styles";

import {
  LandingGridContainer,
  LandingSubTitle,
  LandingParagraph,
} from "../Landing.styles";

const Pricing = () => (
  <LandingGridContainer>
    <LandingSubTitle>The right price for your pocket</LandingSubTitle>

    <LandingParagraph>
      A lot of features that help you to have the best experience ever while
      listening to a podcast
    </LandingParagraph>

    <PricingContainer>
      <PricingAvailableContainer>
        <PricingAvailableText>AVAILABLE SOON</PricingAvailableText>
      </PricingAvailableContainer>

      <PricingTitle>Pro features coming soon...</PricingTitle>

      <PricingItemsContainer>
        <PricingItemContainer>
          <PricingItemTitle>Exclusive features</PricingItemTitle>
          <PricingItemText>
            Get a more sophisticated player with exclusive features such as
            queue, share, trim, etc.
          </PricingItemText>
        </PricingItemContainer>

        <PricingItemContainer>
          <PricingItemTitle>Bookmarks</PricingItemTitle>
          <PricingItemText>
            Save podcasts and episodes for later, don't miss important content
            anymore.
          </PricingItemText>
        </PricingItemContainer>

        <PricingItemContainer>
          <PricingItemTitle>No ads</PricingItemTitle>
          <PricingItemText>
            We don't have any annoying ads but with the premium you'll have the
            best experience without any ads at all.
          </PricingItemText>
        </PricingItemContainer>

        <PricingItemContainer>
          <PricingItemTitle>Custom themes</PricingItemTitle>
          <PricingItemText>
            Style your app the way you want to, changing color and themes.
          </PricingItemText>
        </PricingItemContainer>
      </PricingItemsContainer>
    </PricingContainer>
  </LandingGridContainer>
);

export default Pricing;
