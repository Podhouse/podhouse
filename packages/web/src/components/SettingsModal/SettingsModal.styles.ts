import { styled } from "../../system/theme";

export const SettingsModalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 35px);
  grid-row-gap: 5px;
  align-items: center;
  justify-content: center;
  top: 70px;
  width: 140px;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  right: 30px;
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const SettingsModalLinkContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.lighestGray};

    a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const SettingsModalLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  text-decoration: none;
`;
