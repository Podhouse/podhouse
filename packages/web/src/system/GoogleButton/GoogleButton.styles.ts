import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const StyledGoogleButton = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.bgSecondary};
  border: none;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: space-evenly;
`;
