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

const PodcastItemWithDetails = ({ podcast }: PodcastItemWithDetailsProps) => {
  const { name, author, avatar } = podcast;

  const imageAlt = `${name} avatar`;

  return (
    <PodcastItemWithDetailsContainer>
      <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
        <Link variant="secondary" size="normal" href="/app/podcast/[podcast]">
          <PodcastItemWithDetailsAvatar src={avatar} alt={imageAlt} />
        </Link>
      </NextLink>

      <PodcastItemInnerContainer>
        <NextLink href="/app/podcast/[podcast]" as="/app/podcast/123">
          <Link variant="secondary" size="normal" href="/app/podcast/123">
            {name}
          </Link>
        </NextLink>

        <Paragraph variant="secondary" size="normal">
          {author}
        </Paragraph>
      </PodcastItemInnerContainer>
    </PodcastItemWithDetailsContainer>
  );
};

export default PodcastItemWithDetails;
