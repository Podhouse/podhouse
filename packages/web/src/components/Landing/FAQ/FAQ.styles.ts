import { styled } from "../../../system/theme";

export const FAQItemsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, max-content);
  grid-gap: 20px;
`;

export const FAQItemContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 10px;
`;

export const FAQItemTitle = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.black};
`;

export const FAQItemBody = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayFour};
`;
