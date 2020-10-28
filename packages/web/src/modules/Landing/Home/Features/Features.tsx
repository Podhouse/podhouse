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
} from "src/components/Landing/Landing.styles";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";

import useTheme from "src/system/useTheme";

const Features = () => {
  const themeState = useTheme();

  const iconColor = themeState.dark ? "#101010" : "#FFFFFF";

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <Heading variant="primary" size="normal" as="h2" fontSize={36}>
          The best podcast experience
        </Heading>

        <Paragraph variant="secondary" size="normal">
          We provide a ton of features so you can listen to your podcasts
          without having to worry about anything.
        </Paragraph>
      </LandingGridContentContainer>

      <FeaturesContainer>
        <FeaturesItemContainer>
          <FeaturesItemIconContainer>
            <Layers color={iconColor} />
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
            <Volume2 color={iconColor} />
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
            <Activity color={iconColor} />
          </FeaturesItemIconContainer>
          <FeaturesItemTextContainer>
            <FeaturesItemTitle>
              Discover new podcasts everyday
            </FeaturesItemTitle>
            <FeaturesItemText>
              Discover new podcasts every day, know what's trending, and
              subscribe to podcasts easily.
            </FeaturesItemText>
          </FeaturesItemTextContainer>
        </FeaturesItemContainer>

        <FeaturesItemContainer>
          <FeaturesItemIconContainer>
            <Smile color={iconColor} />
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
};

export default Features;
