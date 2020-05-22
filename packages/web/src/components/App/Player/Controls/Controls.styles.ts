import { styled } from "../../../../system/theme";

export const ControlsContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 14px 1fr;
  grid-column-gap: 20px;
  background: none;

  @media screen and (min-width: 800px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ControlsButtonsContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  background: none;
  justify-self: flex-end;
  align-items: center;
  justify-items: flex-end;

  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    justify-self: center;
    justify-items: center;
  }
`;

export const ControlsSliderContainer = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;

export const ControlsTime = styled.p`
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.black};
    text-transform: uppercase;
    cursor: pointer;
    justify-self: center;
  }
`;
