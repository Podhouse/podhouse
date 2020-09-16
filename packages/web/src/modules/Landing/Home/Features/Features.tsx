import React from "react";
import { Layers, Volume2, Activity, Smile } from "react-feather";

import {
  FeaturesContainer,
  FeaturesItemContainer,
  FeaturesItemIconContainer,
  FeaturesItemTextContainer,
  FeaturesItemTitle,
  FeaturesItemText,
} from "./Features.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
} from "src/components/Landing/Landing.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

const Features = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>The best podcast experience</LandingSubTitle>

      <Paragraph variant="secondary" size="normal">
        We provide a ton of features so you can listen to your podcasts without
        having to worry about anything.
      </Paragraph>
    </LandingGridContentContainer>

    <FeaturesContainer>
      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Layers color="#FFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <FeaturesItemTitle>
            Simple, intuitive and clean design
          </FeaturesItemTitle>
          <FeaturesItemText>
            We bring a nice, clean and intuitive app for you to listen to your
            favorite podcasts.
          </FeaturesItemText>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Volume2 color="#FFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <FeaturesItemTitle>
            Listen to podcasts anywhere, anytime
          </FeaturesItemTitle>
          <FeaturesItemText>
            Access and listen to podcasts anywhere and anytime, without having
            to worry about sync.
          </FeaturesItemText>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Activity color="#FFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <FeaturesItemTitle>Discover new podcasts everyday</FeaturesItemTitle>
          <FeaturesItemText>
            Discover new podcasts every day, know what's trending, and subscribe
            to podcasts easily.
          </FeaturesItemText>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Smile color="#FFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <FeaturesItemTitle>No annoying ads</FeaturesItemTitle>
          <FeaturesItemText>
            You will not see any annoying ads, your experience is our main
            priority, now and ever.
          </FeaturesItemText>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>
    </FeaturesContainer>
  </LandingGridContainer>
);

export default Features;
