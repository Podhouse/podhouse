import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const EpisodeItemContainer = styled.div`
  width: 100%;
  min-width: 50px;
  max-width: 140px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 140px minmax(min-content, max-content) minmax(
      min-content,
      max-content
    );
  grid-row-gap: 10px;
  align-items: center;
  justify-items: flex-start;
`;

export const EpisodeItemAvatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 5px;
  cursor: pointer;
`;

export const EpisodeItemName = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
  text-decoration: none;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const EpisodeItemAuthor = styled.p<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
