import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithDetailsListContainer,
  PodcastsWithDetailsListSection,
  PodcastsWithDetailsListHeader,
} from "./PodcastsWithDetailsList.styles";

import PodcastItemWithDetails from "src/components/Podcast/PodcastItemWithDetails/PodcastItemWithDetails";

const PodcastsWithDetailsList = () => (
  <PodcastsWithDetailsListContainer>
    <PodcastsWithDetailsListHeader>
      <Heading as="h1" fontSize={14} fontWeight="500" textAlign="start">
        PodcastsWithDetailsList
      </Heading>
      <Divider orientation="horizontal" />
    </PodcastsWithDetailsListHeader>

    <PodcastsWithDetailsListSection>
      <PodcastItemWithDetails key="1" />
      <PodcastItemWithDetails key="2" />
      <PodcastItemWithDetails key="3" />
      <PodcastItemWithDetails key="4" />
    </PodcastsWithDetailsListSection>
  </PodcastsWithDetailsListContainer>
);

export default PodcastsWithDetailsList;
