import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const AuthContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 30px;
  border-radius: 5px;
`;

export const AuthInsideContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  max-width: 440px;
  max-height: 100%;
  box-shadow: none;
  display: grid;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(min-content, max-content));
  grid-row-gap: 20px;
`;

export const AuthTextContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  align-self: center;
  justify-self: center;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: flex-center;
`;

export const AuthText = styled.h3<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.004em;
  color: ${({ theme }) => theme.secondary};
`;

export const AuthFormContainer = styled.form<StyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: grid;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
`;

export const AuthLinksContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  justify-self: center;
`;

export const AuthCircle = styled.div<StyleProps>`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: ${({ theme }) => theme.tertiary};
  align-self: center;
`;

export const AuthParagraphLink = styled.p<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.secondary};
  justify-self: center;

  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const AuthGetStartedButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 10px;
`;
