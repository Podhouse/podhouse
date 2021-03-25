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
        fontWeight="600"
      >
        The best podcast experience
      </Heading>

      <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="300" textAlign="center">
        A ton of features that you need to listen to a podcast with the best experience ever
      </Text>
    </LandingGridContentContainer>

    <FeaturesContainer>
      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Layers color="#FFFFFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontSize={16} lineHeight="30px" fontWeight="500">
            Simple, intuitive, and clean
          </Text>
          <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="300" textAlign="start">
            A nice, clean and intuitive experience for you to listen to your favorite podcasts
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Volume2 color="#FFFFFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontSize={16} lineHeight="30px" fontWeight="500">
            Listen to podcasts anywhere, anytime
          </Text>
          <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="300" textAlign="start">
            Access and listen to podcasts anywhere and anytime, without having to worry about sync
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Activity color="#FFFFFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontSize={16} lineHeight="30px" fontWeight="500">
            Discover new podcasts everyday
          </Text>
          <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="300" textAlign="start">
            Discover new podcasts every day, know what's trending and subscribe to podcasts easily
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>

      <FeaturesItemContainer>
        <FeaturesItemIconContainer>
          <Smile color="#FFFFFF" />
        </FeaturesItemIconContainer>
        <FeaturesItemTextContainer>
          <Text color="#101010" fontSize={16} lineHeight="30px" fontWeight="500">
            No annoying ads
          </Text>
          <Text color="#6F6F6F" fontSize={16} lineHeight="30px" fontWeight="300" textAlign="start">
            You will not see any annoying ads, your experience is our main priority, now and ever
          </Text>
        </FeaturesItemTextContainer>
      </FeaturesItemContainer>
    </FeaturesContainer>
  </LandingGridContainer>
);

export default Features;
