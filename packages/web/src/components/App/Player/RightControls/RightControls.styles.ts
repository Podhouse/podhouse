import styled from "@emotion/styled";

export const RightControlsContainer = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    width: auto;
    height: 100%;
    grid-column: 3/ 4;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    grid-template-rows: 1fr;
    grid-column-gap: 15px;
    align-items: center;
    justify-content: space-evenly;
    justify-self: flex-end;
  }
`;
