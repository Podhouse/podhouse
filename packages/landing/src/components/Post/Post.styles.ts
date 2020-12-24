import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

export const PostContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 190px repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;

export const PostImage = styled(Image)`
  border-radius: 5px;
  object-fit: cover;
`;
