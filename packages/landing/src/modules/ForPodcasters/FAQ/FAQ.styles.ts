import styled from "@emotion/styled";

export const FAQItemsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
  grid-gap: 30px;

  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FAQItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;
`;
