import React from "react";
import { Layers, Volume2, Activity, Smile } from "react-feather";
import { Heading, Text } from "@chakra-ui/react";

import {
  FeaturesContainer,
  FeaturesItemContainer,
  FeaturesItemIconContainer,
  FeaturesItemTextContainer,
} from "./Features.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const Features = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading
        color="#101010"
        as="h2"
        fontSize={36}
        letterSpacing="-0.03em"
        textAlign="center"
      >
        The best podcast experience
      </Heading>

      <Text color="#101010" lineHeight="30px" textAlign="center">
        We provide a ton of features so you can listen to your podcasts without
        having to worry about anything.
      </Text>
    </LandingGridContentContainer>

    <FeaturesContainer>
      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Layers color="#fff" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontWeight="600">
            Simple, intuitive and clean design
          </Text>
          <Text color="#101010" lineHeight="30px">
            We bring a nice, clean and intuitive app for you to listen to your
            favorite podcasts.
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Volume2 color="#fff" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontWeight="600">
            Listen to podcasts anywhere, anytime
          </Text>
          <Text color="#101010" lineHeight="30px">
            Access and listen to podcasts anywhere and anytime, without having
            to worry about sync.
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Activity color="#fff" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontWeight="600">
            Discover new podcasts everyday
          </Text>
          <Text color="#101010" lineHeight="30px">
            Discover new podcasts every day, know what's trending, and subscribe
            to podcasts easily.
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Smile color="#fff" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontWeight="600">
            No annoying ads
          </Text>
          <Text color="#101010" lineHeight="30px">
            You will not see any annoying ads, your experience is our main
            priority, now and ever.
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>
    </FeaturesContainer>
  </LandingGridContainer>
);

export default Features;
