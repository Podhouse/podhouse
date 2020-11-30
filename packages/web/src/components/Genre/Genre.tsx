import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  GenreContainer,
  GenreInnerContainer,
  GenreHeading,
} from "./Genre.styles";

import { GenreProps } from "./Genre.types";

const Genre = ({ genre }: GenreProps) => (
  <GenreContainer key={genre.id}>
    <ReactRouterLink to={genre.href}>
      <GenreInnerContainer>
        <GenreHeading size="md" letterSpacing="-0.03em" textAlign="center">
          {genre.name}
        </GenreHeading>
      </GenreInnerContainer>
    </ReactRouterLink>
  </GenreContainer>
);

export default Genre;
