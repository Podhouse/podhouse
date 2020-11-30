import styled from "@emotion/styled";

export const FeaturesContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, max-content);
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    width: 100%;
    max-width: 800px;
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
    grid-gap: 20px;
  }
`;

export const FeaturesItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
`;

export const FeaturesItemIconContainer = styled.div`
  width: 40px;
  height: 40px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101010;
  border-radius: 5px;
`;

export const FeaturesItemTextContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;
  justify-items: flex-start;
`;
