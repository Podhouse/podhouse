import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import {
  PodcastsWithDetailsListContainer,
  PodcastsWithDetailsListSection,
  PodcastsWithDetailsListHeader,
} from "./PodcastsWithDetailsList.styles";

import PodcastItemWithDetails from "src/components/Podcast/PodcastItemWithDetails/PodcastItemWithDetails";

interface Props {
  title: string;
  readonly podcasts: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly _id: string;
        readonly name: string;
        readonly author: string;
        readonly appleId: number;
        readonly image: string;
      } | null;
    } | null>;
  };
}

const PodcastsWithDetailsList = ({ title, podcasts }: Props) => (
  <PodcastsWithDetailsListContainer>
    <PodcastsWithDetailsListHeader>
      <Heading as="h1" fontSize={14} fontWeight="500" textAlign="start">
        {title}
      </Heading>
      <Divider orientation="horizontal" />
    </PodcastsWithDetailsListHeader>

    <PodcastsWithDetailsListSection>
      {podcasts.edges.map(({ node }: any) => (
        <PodcastItemWithDetails key={node.id} node={node} />
      ))}
    </PodcastsWithDetailsListSection>
  </PodcastsWithDetailsListContainer>
);

export default PodcastsWithDetailsList;
