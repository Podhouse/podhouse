import React from "react";
import Image from "next/image";
import { Heading, Text } from "@chakra-ui/react";

import { PodcastsContainer, PodcastPictureContainer } from "./Podcasts.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
} from "src/components/Landing/Landing.styles";

const Podcasts = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <Heading color="#101010" as="h2" fontSize={36} letterSpacing="-0.03em" textAlign="center">
        Listen to your favorite podcasts
      </Heading>
      <Text color="#101010" lineHeight="25px" textAlign="center">
        Get started now and listen to the best podcasts, without having to pay
        anything for it.
      </Text>
    </LandingGridContentContainer>

    <PodcastsContainer>
      <PodcastPictureContainer>
        <Image
          src="/images/joe.webp"
          alt="Joe Rogan podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/wtf.webp"
          alt="WTF with Marcon Maron podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/the.webp"
          alt="The Allusionist podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/mfm.webp"
          alt="My Favorite Murder podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/99.webp"
          alt="99% Invisible podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/criminal.webp"
          alt="Criminal podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>
    </PodcastsContainer>
  </LandingGridContainer>
);

export default Podcasts;