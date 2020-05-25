import { css } from "styled-components";

import { styled } from "../../../system/theme";

interface UpgradePlanProps {
  selected?: boolean;
}

export const UpgradeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const UpgradeInsideContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 440px;
  justify-self: center;
  align-self: center;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

export const UpgradeXgruveLogo = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 29px;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
  align-self: center;
  justify-self: center;
`;

export const UpgradeTitle = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  justify-self: center;
`;

export const UpgradeParagraph = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  justify-self: center;
`;

export const UpgradePlansContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const UpgradePlanContainer = styled.div<UpgradePlanProps>`
  width: 120px;
  height: 90px;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background: ${({ theme }) => theme.colors.black};
      border: none;
      transition: 0.1s;

      h1,
      h3 {
        color: ${({ theme }) => theme.colors.white};
      }
    `};

  :hover {
    background: ${({ theme }) => theme.colors.black};
    border: none;
    transition: 0.1s;

    h1,
    h3 {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const UpgradePlanTitle = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
`;

export const UpgradePlanPrice = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;

export const UpgradeFormContainer = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

export const UpgradeFormCVCDateContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;
