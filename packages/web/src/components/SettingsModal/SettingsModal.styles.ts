import styled from "@emotion/styled";

import { StyleProps } from "src/system/styles.types";

export const SettingsModalContainer = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 35px);
  grid-row-gap: 5px;
  align-items: center;
  justify-content: center;
  top: 70px;
  width: 140px;
  height: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 5px;
  right: 30px;
  position: absolute;
  align-self: flex-end;
  z-index: 2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
`;

export const SettingsModalLinkContainer = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundPrimary};
  padding-left: 20px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.backgroundSecondary};

    a {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const SettingsModalLink = styled.a<StyleProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.tertiary};
  text-decoration: none;
`;

export const SettingsThemeContainer = styled.div<StyleProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundPrimary};
  padding: 0 20px 0 20px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.backgroundSecondary};

    a {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export const SettingsThemeIconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  .settings-theme-sun {
    &:hover {
      svg {
        color: red;
      }
    }
  }
`;
