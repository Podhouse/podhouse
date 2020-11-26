import React from "react";
import { Skeleton, Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithDetailsListContainer,
  PodcastsWithDetailsListSection,
  PodcastsWithDetailsListHeader,
} from "./PodcastsWithDetailsList.styles";

import PodcastItemWithDetails from "src/components/Podcast/PodcastItemWithDetails/PodcastItemWithDetails";

import { PodcastsWithDetailsListProps } from "./PodcastsWithDetailsList.types";

const PodcastsWithDetailsList = ({
  title,
  podcasts,
}: PodcastsWithDetailsListProps) => {
  const renderItems = () => {
    if (podcasts === null || podcasts === undefined) {
      return <Skeleton />;
    } else {
      return podcasts.map((podcast: any) => (
        <PodcastItemWithDetails key={podcast.id} podcast={podcast} />
      ));
    }
  };

  return (
    <PodcastsWithDetailsListContainer>
      <PodcastsWithDetailsListHeader>
        <Heading as="h1" fontSize={14} fontWeight={500} textAlign="start">
          {title}
        </Heading>
        <Divider orientation="horizontal" />
      </PodcastsWithDetailsListHeader>

      <PodcastsWithDetailsListSection>
        {renderItems()}
      </PodcastsWithDetailsListSection>
    </PodcastsWithDetailsListContainer>
  );
};

export default PodcastsWithDetailsList;
