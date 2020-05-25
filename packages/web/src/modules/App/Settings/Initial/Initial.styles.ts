import { styled } from "../../../../system/theme";

export const InitialButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InitialButton = styled.button`
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
