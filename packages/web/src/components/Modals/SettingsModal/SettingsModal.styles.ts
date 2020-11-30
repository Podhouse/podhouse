import styled from "@emotion/styled";

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
  background: #ffffff;
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
  background: #ffffff;
  padding-left: 20px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  &:hover {
    background: #f3f3f3;

    a {
      color: #101010;
    }
  }
`;

export const SettingsModalLink = styled.a`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  text-decoration: none;
`;
