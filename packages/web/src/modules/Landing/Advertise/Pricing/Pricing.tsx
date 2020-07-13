import * as React from "react";
import { Check } from "react-feather";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "src/components/Landing/Landing.styles";

import Button from "src/system/Button/Button";

import {
  PricingContainer,
  PricingBadgeContainer,
  PricingBadgeText,
  PricingPriceContainer,
  PricingPriceText,
  PricingPriceSubText,
  PricingDescription,
  PricingFeaturesContainer,
  PricingFeatureContainer,
  PricingFeatureText,
} from "./Pricing.styles";

const Pricing = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>Our unique advertising plan</LandingSubTitle>
      <LandingParagraph>
        Now that you know our monthly stats, check our unique advertising plan
      </LandingParagraph>
    </LandingGridContentContainer>

    <PricingContainer>
      <PricingBadgeContainer>
        <PricingBadgeText>STANDARD</PricingBadgeText>
      </PricingBadgeContainer>

      <PricingPriceContainer>
        <PricingPriceText>$499</PricingPriceText>
        <PricingPriceSubText>/mo</PricingPriceSubText>
      </PricingPriceContainer>

      <PricingDescription>
        The right price for you pocket, get featured and increase your podcast
        listeners.
      </PricingDescription>

      <PricingFeaturesContainer>
        <PricingFeatureContainer>
          <Check color="#000" size={16} />
          <PricingFeatureText>
            Reach highly engaged listeners
          </PricingFeatureText>
        </PricingFeatureContainer>

        <PricingFeatureContainer>
          <Check color="#000" size={16} />
          <PricingFeatureText>30 days featured</PricingFeatureText>
        </PricingFeatureContainer>

        <PricingFeatureContainer>
          <Check color="#000" size={16} />
          <PricingFeatureText>Support by email</PricingFeatureText>
        </PricingFeatureContainer>
      </PricingFeaturesContainer>

      <a
        href="mailto:leonardomso11@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button type="button">Contact us</Button>
      </a>
    </PricingContainer>
  </LandingGridContainer>
);

export default Pricing;
