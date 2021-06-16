import styled from "@emotion/styled";
import { Image } from "@chakra-ui/react";

export const MobilePodcastContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-self: center;
  justify-self: center;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  z-index: 10;
  margin-left: 30px;
`;

export const MobilePodcastImage = styled(Image)`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
  align-self: center;
`;
