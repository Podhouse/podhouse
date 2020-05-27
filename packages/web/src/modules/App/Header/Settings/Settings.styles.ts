import { styled } from "../../../../system/theme";

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  flex-basis: 70px;
`;

export const SettingsInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  :hover {
    cursor: pointer;
  }
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
