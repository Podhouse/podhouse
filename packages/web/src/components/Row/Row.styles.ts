import { styled } from "../../system/theme";

export const RowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const RowHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const RowHeaderTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  align-self: center;
  justify-self: flex-start;
`;

export const RowBreakLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lighestGray};
  margin: 0;
  border: none;
`;

export const RowSection = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 20px;
  justify-content: center;

  @media screen and (min-width: 800px) {
    justify-content: flex-start;
  }
`;
