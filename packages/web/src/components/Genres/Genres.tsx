import React from "react";

import { GenresContainer, GenresSection, GenresHeader } from "./Genres.styles";

import Genre from "src/components/Genres/Genre/Genre";

import Heading from "src/system/Heading/Heading";
import Separator from "src/system/Separator/Separator";

import { IGenre, GenresProps } from "./Genres.types";

const Genres = ({ title, genres }: GenresProps) => {
  const renderItems = () =>
    genres.map(({ id, name, icon, href }: IGenre) => (
      <Genre key={id} id={id} name={name} icon={icon} href={href} />
    ));

  return (
    <GenresContainer>
      <GenresHeader>
        <Heading
          as="h1"
          variant="secondary"
          size="normal"
          fontSize={14}
          fontWeight={500}
          textAlign="start"
        >
          {title}
        </Heading>
        <Separator variant="secondary" orientation="horizontal" />
      </GenresHeader>

      <GenresSection>{renderItems()}</GenresSection>
    </GenresContainer>
  );
};

export default Genres;
