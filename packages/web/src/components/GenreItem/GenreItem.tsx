import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  GenreItemContainer,
  GenreItemInnerContainer,
  GenreItemHeading,
} from "./GenreItem.styles";

import { Genre } from "src/utils/genres";

const GenreItem = ({ id, href, name, primaryGenre }: Genre) => (
  <GenreItemContainer key={id}>
    <ReactRouterLink
      to={{ pathname: href, state: { primaryGenre: primaryGenre } }}
    >
      <GenreItemInnerContainer>
        <GenreItemHeading size="md" letterSpacing="-0.03em" textAlign="center">
          {name}
        </GenreItemHeading>
      </GenreItemInnerContainer>
    </ReactRouterLink>
  </GenreItemContainer>
);

export default GenreItem;
