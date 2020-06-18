import * as React from "react";

import PodcastItem from "../Podcast/PodcastItem/PodcastItem";

import {
  RowContainer,
  RowSection,
  RowHeader,
  RowHeaderTitle,
  RowBreakLine,
} from "./Row.styles";

interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
}

interface RowProps {
  title: string;
  items: Array<Podcast>;
}

const Row = ({ title, items }: RowProps) => {
  const renderItems = () =>
    items.map((item: Podcast) => <PodcastItem key={item.id} podcast={item} />);

  return (
    <RowContainer>
      <RowHeader>
        <RowHeaderTitle>{title}</RowHeaderTitle>
        <RowBreakLine />
      </RowHeader>

      <RowSection>{renderItems()}</RowSection>
    </RowContainer>
  );
};

export default Row;
