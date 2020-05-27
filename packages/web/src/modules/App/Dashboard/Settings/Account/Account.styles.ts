import { styled } from "../../../../../system/theme";

export const AccountContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 30px;
`;

export const AccountItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: max-content max-content;
  grid-gap: 20px;
`;

export const AccountItemTitle = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
  grid-row: 1 / 2;
  grid-column: 1 / 2;
`;

export const AccountItemText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.strongestGray};
  grid-row: 2 / 3;
  grid-column: 1 / 2;
`;

export const AccountItemTextStrong = styled.strong`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.strongestGray};
`;

export const AccountButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

export const AccountButton = styled.button`
  width: 120px;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.strongestGray};
  cursor: pointer;
  outline: none;

  :hover {
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
    color: ${({ theme }) => theme.colors.black};
  }

  @media screen and (min-width: 800px) {
    width: 180px;
  }
`;
