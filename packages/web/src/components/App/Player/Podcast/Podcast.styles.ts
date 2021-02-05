import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const PodcastContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-self: center;
  justify-self: center;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  z-index: 10;
  margin-left: 30px;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    margin: 0;

    .podcast-image {
      display: none;
    }
  }
`;

export const PodcastImage = styled(Image)`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
  align-self: center;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const PodcastDetails = styled.div`
  display: none;

  .like-button {
    display: none;
  }

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: max-content 20px;
    grid-template-rows: max-content max-content;
    grid-gap: 10px;
    justify-items: flex-start;

    .like-button {
      display: block;
    }
  }
`;

export const PodcastNameTitle = styled(ReactRouterLink)`
  max-width: 300px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const PodcastFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;
