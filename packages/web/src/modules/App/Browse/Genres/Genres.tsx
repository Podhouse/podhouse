import React from "react";
import { Heading, Divider } from "@chakra-ui/react";

import { GenresContainer, GenresSection, GenresHeader } from "./Genres.styles";

import Genre from "src/components/Genre/Genre";

import { IGenre, GenresProps } from "./Genres.types";

const Genres = ({ title, genres }: GenresProps) => {
  const renderItems = () =>
    genres.map((genre: IGenre) => <Genre key={genre.id} genre={genre} />);

  return (
    <GenresContainer>
      <GenresHeader>
        <Heading as="h1" fontSize={14} fontWeight={500} textAlign="start">
          {title}
        </Heading>
        <Divider orientation="horizontal" />
      </GenresHeader>

      <GenresSection>{renderItems()}</GenresSection>
    </GenresContainer>
  );
};

export default Genres;
