import styled from "@emotion/styled";

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
  object-fit: cover;
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
