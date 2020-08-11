import React from "react";

import { PodcastsContainer, PodcastPictureContainer } from "./Podcast.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "src/components/Landing/Landing.styles";

const Podcasts = () => (
  <LandingGridContainer>
    <LandingGridContentContainer>
      <LandingSubTitle>Listen to your favorite podcasts</LandingSubTitle>
      <LandingParagraph>
        Get started now and listen to the best podcasts, without having to pay
        anything for it.
      </LandingParagraph>
    </LandingGridContentContainer>

    <PodcastsContainer>
      <PodcastPictureContainer>
        <source srcSet="/images/joe.webp" type="image/webp" />
        <source srcSet="/images/joe.jpg" type="image/jpeg" />
        <img src="/images/joe.jpg" alt="Joe Rogan podcast" />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <source srcSet="/images/wtf.webp" type="image/webp" />
        <source srcSet="/images/wtf.jpg" type="image/jpeg" />
        <img src="/images/wtf.jpg" alt="WTF with Marcon Maron podcast" />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <source srcSet="/images/the.webp" type="image/webp" />
        <source srcSet="/images/the.jpg" type="image/jpeg" />
        <img src="/images/the.jpg" alt="The Allusionist podcast" />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <source srcSet="/images/mfm.webp" type="image/webp" />
        <source srcSet="/images/mfm.jpg" type="image/jpeg" />
        <img src="/images/mfm.jpg" alt="My Favorite Murder podcast" />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <source srcSet="/images/99.webp" type="image/webp" />
        <source srcSet="/images/99.jpg" type="image/jpeg" />
        <img src="/images/99.jpg" alt="99% Invisible podcast" />
      </PodcastPictureContainer>

      <PodcastPictureContainer>
        <source srcSet="/images/criminal.webp" type="image/webp" />
        <source srcSet="/images/criminal.jpg" type="image/jpeg" />
        <img src="/images/criminal.jpg" alt="Criminal podcast" />
      </PodcastPictureContainer>
    </PodcastsContainer>
  </LandingGridContainer>
);

export default Podcasts;
