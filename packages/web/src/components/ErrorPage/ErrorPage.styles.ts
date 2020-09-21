import styled from "@emotion/styled";

export const ErrorPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const ErrorPageInnerContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  align-items: center;
  justify-content: center;
`;
