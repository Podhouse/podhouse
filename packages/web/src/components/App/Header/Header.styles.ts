import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: none;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-area: header;
    grid-template-columns: max-content 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    background: #ffffff;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 1;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    border-bottom: 1px solid #f3f3f3;
  }
`;

export const SkeletonContainer = styled.div`
  width: fit-content;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-self: flex-end;
  justify-content: flex-end;
  align-items: center;
`;
