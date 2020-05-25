import { styled } from "../../system/theme";

export const SettingsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SettingsInsideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 30px;
  background: ${({ theme }) => theme.colors.white};
  padding: 30px;

  @media screen and (min-width: 800px) {
    width: 100%;
    max-width: 700px;
    height: 100%;
  }
`;

export const SettingsRowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  grid-row-gap: 20px;
`;

export const SettingsRowHeader = styled.div`
  width: 100%;
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  grid-template-rows: max-content max-content;
`;

export const SettingsRowHeaderTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
  align-self: center;
  justify-self: flex-start;
`;

export const SettingsRowBreakLine = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lighestGray};
  margin: 0;
  border: none;
`;

export const SettingsRowSectionSingle = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 120px;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 180px;
  }
`;

export const SettingsRowSectionMultiple = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;

  @media screen and (min-width: 800px) {
    grid-template-rows: repeat(auto-fill, max-content);
    grid-template-columns: 1fr;
  }
`;

export const SettingsRowText = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.strongestGray};
`;

export const SettingsFieldContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SettingsToggleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
