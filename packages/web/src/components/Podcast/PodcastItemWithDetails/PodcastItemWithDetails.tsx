import React from "react";
import NextLink from "next/link";

import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";

import {
  PodcastItemWithDetailsContainer,
  PodcastItemWithDetailsAvatar,
  PodcastItemInnerContainer,
} from "./PodcastItemWithDetails.styles";

import { PodcastItemWithDetailsProps } from "./PodcastItemWithDetails.types";

const PodcastItemWithDetails = ({ node }: PodcastItemWithDetailsProps) => {
  const { _id, name, author, image } = node;

  const imageAlt = `${name} image`;

  return (
    <PodcastItemWithDetailsContainer>
      <NextLink href={{ pathname: `/app/podcast/${_id}`, query: { _id: _id } }}>
        <Link variant="secondary" size="normal">
          <PodcastItemWithDetailsAvatar src={image} alt={imageAlt} />
        </Link>
      </NextLink>

      <PodcastItemInnerContainer>
        <NextLink
          href={{ pathname: `/app/podcast/${_id}`, query: { _id: _id } }}
        >
          <Link textAlign="start" variant="secondary" size="normal">
            {name}
          </Link>
        </NextLink>

        <Paragraph textAlign="start" variant="secondary" size="normal">
          {author}
        </Paragraph>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
