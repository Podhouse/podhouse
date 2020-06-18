import { styled } from "src/system/theme";

export const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.midGray};
  background: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.lightGray}`};
  box-sizing: border-box;
  border-radius: 5px;
  text-indent: 20px;
  outline: none;
  letter-spacing: normal;
  word-spacing: normal;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  option {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.midGray};
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    text-indent: 20px;
  }
`;
