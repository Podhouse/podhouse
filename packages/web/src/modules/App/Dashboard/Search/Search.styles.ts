import { styled } from "../../../../system/theme";

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 30px 0px 30px;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-rows: max-content;
    grid-template-columns: 1fr;
  }
`;
