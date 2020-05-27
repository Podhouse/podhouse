import { styled } from "../../../system/theme";

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  padding: 30px;
  border-radius: 5px;
`;

export const AuthInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 440px;
  max-height: 100%;
  box-shadow: none;
  display: grid;
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

export const AuthText = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.004em;
  color: ${({ theme }) => theme.colors.strongestGray};
`;

export const AuthFormContainer = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
`;

export const AuthParagraphLink = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
