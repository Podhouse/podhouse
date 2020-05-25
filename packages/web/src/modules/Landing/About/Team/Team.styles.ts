import { styled } from "../../../../system/theme";

export const TeamContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
`;

export const TeamInnerContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content;
  grid-row-gap: 30px;
`;

export const TeamHeaderContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 10px;
`;

export const TeamUserPictureContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

export const TeamUserPicture = styled.picture`
  width: 100%;
  height: 100%;
  cursor: pointer;

  img,
  source {
    border-radius: 5px;
  }
`;

export const TeamUserNameTitle = styled.h3`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
`;

export const TeamUserHandleTitle = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

export const TeamTextParagraph = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-align: start;
`;
