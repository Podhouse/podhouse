import styled from "@emotion/styled";

export const HeaderIconTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const CheckContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(39, 174, 96, 0.5);
  align-self: center;
  justify-self: center;
`;
