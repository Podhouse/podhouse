import React from "react";
import Skeleton from "react-loading-skeleton";

import {
  PodcastsWithDetailsContainer,
  PodcastsWithDetailsSection,
  PodcastsWithDetailsHeader,
} from "./PodcastsWithDetails.styles";

import PodcastItemWithDetails from "src/components/Podcast/PodcastItemWithDetails/PodcastItemWithDetails";

import Heading from "src/system/Heading/Heading";
import Separator from "src/system/Separator/Separator";

import { PodcastsWithDetailsProps } from "./PodcastsWithDetails.types";

const PodcastsWithDetails = ({ title, podcasts }: PodcastsWithDetailsProps) => {
  const renderItems = () => {
    if (podcasts === null || podcasts === undefined) {
      return <Skeleton />;
    } else {
      return podcasts.podcasts.edges.map(({ node }) => (
        <PodcastItemWithDetails key={node.id} node={node} />
      ));
    }
  };

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
