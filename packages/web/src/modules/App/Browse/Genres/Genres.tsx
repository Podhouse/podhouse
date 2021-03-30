import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import { GenresContainer, GenresSection, GenresHeader } from "./Genres.styles";

import GenreItem from "src/components/GenreItem/GenreItem";

import genres, { Genre } from "src/utils/genres";

const Genres = () => (
  <GenresContainer>
    <GenresHeader>
      <Heading
        as="h1"
        fontSize={16}
        fontWeight="600"
        letterSpacing="-0.03em"
        lineHeight="30px"
        textAlign="start"
      >
        Genres
      </Heading>
      <Divider orientation="horizontal" />
    </GenresHeader>

    <GenresSection>
      {genres.map(({ href, id, name, primaryGenre }: Genre) => (
        <GenreItem
          key={id}
          id={id}
          name={name}
          primaryGenre={primaryGenre}
          href={href}
        />
      ))}
    </GenresSection>
  </GenresContainer>
);

export default Genres;
