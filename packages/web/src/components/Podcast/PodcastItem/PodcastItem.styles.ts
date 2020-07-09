import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const PodcastItemContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 60px;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
`;

export const PodcastItemAvatar = styled.img`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
`;

export const PodcastItemName = styled.a<StyleProps>`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  text-decoration: none;
  align-self: flex-end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const PodcastItemAuthor = styled.p<StyleProps>`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  align-self: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
