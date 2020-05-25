import { styled } from "../theme";

interface GoogleButtonProps {
  type: "button";
  width?: number | string;
  height?: number;
  color?: string;
  mt?: number;
}

export const StyledGoogleButton = styled.button<GoogleButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: ${({ mt }) => mt}px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.midGray}`};
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  outline: none;
`;

export const Wrapper = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
`;
