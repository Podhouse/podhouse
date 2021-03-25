import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

export const PostContainer = styled.article`
  width: 100%;
  max-width: 800px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px repeat(auto-fill, max-content);
  grid-row-gap: 20px;
  align-items: center;

  @media screen and (min-width: 1000px) {
    grid-template-columns: 340px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    align-items: center;
  }
`;

export const PostImage = styled(Image)`
  border-radius: 5px;
  object-fit: cover;
`;
