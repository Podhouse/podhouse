import { styled } from "../../../../system/theme";

export const PricingContainer = styled.div`
  width: 100%;
  max-width: 340px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;

export const PricingBadgeContainer = styled.div`
  width: fit-content;
  padding: 10px;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grayOne};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PricingBadgeText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayThree};
`;

export const PricingPriceContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
`;

export const PricingPriceText = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export const PricingPriceSubText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export const PricingDescription = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayFour};
`;

export const PricingFeaturesContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 20px;
`;

export const PricingFeatureContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
`;

export const PricingFeatureText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
`;
