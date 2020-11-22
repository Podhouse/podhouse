import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: none;

  @media screen and (min-width: 800px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-area: header;
    grid-template-columns: 500px 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "search settings";
    grid-column-gap: 30px;
    background: #ffffff;
    border-bottom: #f3f3f3;
    padding-left: 30px;
    padding-right: 30px;
    z-index: 1;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;
