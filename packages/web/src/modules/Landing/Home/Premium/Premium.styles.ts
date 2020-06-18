import { styled } from "../../../../system/theme";

export const PremiumContainer = styled.div`
  width: auto;
  max-width: 800px;
  height: auto;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
  padding: 20px;
  justify-items: flex-start;
`;

export const PremiumAvailableContainer = styled.div`
  width: fit-content;
  padding: 10px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grayOne};
  border-radius: 5px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const PremiumAvailableText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayThree};
`;

export const PremiumTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
  text-align: start;
`;

export const PremiumItemsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content max-content;
  grid-row-gap: 10px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content max-content;
    grid-gap: 20px;
  }
`;

export const PremiumItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 10px;
`;

export const PremiumItemTitle = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export const PremiumItemText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grayFour};
`;
