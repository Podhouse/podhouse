import React from "react";

import {
  PodcastsWithDetailsContainer,
  PodcastsWithDetailsSection,
  PodcastsWithDetailsHeader,
} from "./PodcastsWithDetails.styles";

import PodcastItemWithDetails from "src/components/Podcast/PodcastItemWithDetails/PodcastItemWithDetails";

import Heading from "src/system/Heading/Heading";
import Separator from "src/system/Separator/Separator";

import { Podcast, PodcastsWithDetailsProps } from "./PodcastsWithDetails.types";

const PodcastsWithDetails = ({ title, items }: PodcastsWithDetailsProps) => {
  const renderItems = () =>
    items.map((item: Podcast) => (
      <PodcastItemWithDetails key={item.id} podcast={item} />
    ));

  return (
    <PodcastsWithDetailsContainer>
      <PodcastsWithDetailsHeader>
        <Heading
          as="h1"
          variant="secondary"
          size="normal"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          {title}
        </Heading>
        <Separator variant="secondary" orientation="horizontal" />
      </PodcastsWithDetailsHeader>

      <PodcastsWithDetailsSection>{renderItems()}</PodcastsWithDetailsSection>
    </PodcastsWithDetailsContainer>
  );
};

export default PodcastsWithDetails;
