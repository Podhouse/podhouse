import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const QueueModalItemContainer = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 50px 1fr max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
`;

export const QueueModalItemAvatar = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
`;

export const QueueModalItemsDetails = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

export const QueueModalItemEpisode = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
`;

export const QueueModalItemPodcast = styled.h5<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
`;
