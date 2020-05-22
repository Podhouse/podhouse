import { styled } from "../../../../system/theme";

interface HeaderAvatarProps {
  avatar: string;
}

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 60px 1fr max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  align-items: center;
`;

export const HeaderAvatar = styled.div<HeaderAvatarProps>`
  width: 60px;
  height: 60px;
  background-image: url(${({ avatar }) => avatar});
  background-size: cover;
  border-radius: 5px;
`;

export const HeaderDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  align-self: center;
`;

export const HeaderName = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.black};
`;

export const HeaderPlan = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.strongestGray};
`;

export const HeaderButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled.button`
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
