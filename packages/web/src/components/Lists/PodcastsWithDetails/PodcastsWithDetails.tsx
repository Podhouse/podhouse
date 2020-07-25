import * as React from "react";

import PodcastItemWithDetails from "../../Podcast/PodcastItemWithDetails/PodcastItemWithDetails";

import {
  PodcastsWithDetailsContainer,
  PodcastsWithDetailsSection,
  PodcastsWithDetailsHeader,
  PodcastsWithDetailsHeaderTitle,
  PodcastsWithDetailsBreakLine,
} from "./PodcastsWithDetails.styles";

interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
}

interface PodcastsWithDetailsProps {
  title: string;
  items: Array<Podcast>;
}

const PodcastsWithDetails = ({ title, items }: PodcastsWithDetailsProps) => {
  const renderItems = () =>
    items.map((item: Podcast) => (
      <PodcastItemWithDetails key={item.id} podcast={item} />
    ));

  return (
    <PodcastsWithDetailsContainer>
      <PodcastsWithDetailsHeader>
        <PodcastsWithDetailsHeaderTitle>{title}</PodcastsWithDetailsHeaderTitle>
        <PodcastsWithDetailsBreakLine />
      </PodcastsWithDetailsHeader>

      <PodcastsWithDetailsSection>{renderItems()}</PodcastsWithDetailsSection>
    </PodcastsWithDetailsContainer>
  );
};

export default PodcastsWithDetails;
