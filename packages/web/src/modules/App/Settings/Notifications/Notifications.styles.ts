import styled from "@emotion/styled";

export const NotificationsItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 40px;
    grid-template-rows: max-content;
    grid-column-gap: 20px;
  }
`;

export const NotificationsToggleContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
