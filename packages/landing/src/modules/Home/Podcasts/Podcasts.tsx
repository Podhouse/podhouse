import React from "react";
import Image from "next/image";
import { Heading, Text, Stack } from "@chakra-ui/react";

import { PodcastsContainer, PodcastPictureContainer } from "./Podcasts.styles";

const Podcasts = () => (
  <Stack
    direction="column"
    spacing="20px"
    maxW="800px"
    justifySelf="center"
    alignItems="center"
    justifyItems="center"
  >
    <Heading
      color="#101010"
      as="h2"
      fontSize={36}
      letterSpacing="-0.03em"
      textAlign="center"
      fontWeight="600"
    >
      Listen to podcasts anytime and anywhere
    </Heading>
    <Text
      color="#6F6F6F"
      fontSize={16}
      lineHeight="30px"
      fontWeight="300"
      textAlign="center"
    >
      Listen to the best podcasts available without having to pay anything for
      it
    </Text>

    <PodcastsContainer>
      <PodcastPictureContainer>
        <Image
          src="/images/podcasts/joe.webp"
          alt="Joe Rogan podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/podcasts/wtf.webp"
          alt="WTF with Marcon Maron podcast"
          width="100%"
          height="100%"
          layout="responsive"
          loading="lazy"
          quality={100}
          priority={false}
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/podcasts/the.webp"
          alt="The Allusionist podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/podcasts/mfm.webp"
          alt="My Favorite Murder podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/podcasts/99.webp"
          alt="99% Invisible podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <Image
          src="/images/podcasts/criminal.webp"
          alt="Criminal podcast"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </PodcastPictureContainer>
    </PodcastsContainer>
  </Stack>
);

export default Podcasts;
