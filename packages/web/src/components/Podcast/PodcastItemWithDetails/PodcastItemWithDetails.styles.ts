import styled from "@emotion/styled";

import Link from "src/system/Link/Link";
import Paragraph from "src/system/Paragraph/Paragraph";

export const PodcastItemWithDetailsContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 60px;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 25px 25px;
  grid-gap: 10px;
  justify-items: flex-start;
`;

export const PodcastItemWithDetailsAvatar = styled.img`
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
`;

export const PodcastItemName = styled(Link)`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;

export const PodcastItemAuthor = styled(Paragraph)`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;
