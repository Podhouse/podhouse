import { styled } from "../../../../system/theme";

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  flex-basis: 70px;
`;

export const SettingsInnerContainer = styled.div`
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: max-content;
  grid-column-gap: 10px;
  align-items: center;
`;

export const SettingsLoggedInContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  width: 100%;
  height: 100%;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  flex-basis: 70px;
  justify-content: space-evenly;
  align-items: center;
`;

export const SettingsLoggedOutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SettingsAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  cursor: pointer;
`;

export const SettingsLoginLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

export const SettingsUpgradeLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;
