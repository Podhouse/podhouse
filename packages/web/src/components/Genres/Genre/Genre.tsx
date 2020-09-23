import React from "react";
import NextLink from "next/link";

import { GenreContainer, GenreAvatar, GenreHeading } from "./Genre.styles";

import { GenreProps } from "./Genre.types";

const Genre = ({ id, name, icon, href }: GenreProps) => (
  <GenreContainer key={id}>
    <NextLink href={href} as={href}>
      <GenreAvatar>
        {icon}
        <GenreHeading as="h2" variant="primary" size="normal" fontSize={16}>
          {name}
        </GenreHeading>
      </GenreAvatar>
    </NextLink>
  </GenreContainer>
);

export default Genre;
