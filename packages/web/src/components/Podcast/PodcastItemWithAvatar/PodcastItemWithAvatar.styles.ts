import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

export const PodcastItemWithAvatarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

export const PodcastItemWithAvatarAvatar = styled(Image)`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  width: 140px;
  height: 140px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
`;
