import styled from "@emotion/styled";

export const PlansContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 30px;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 800px) {
    grid-template-columns: max-content max-content;
    grid-template-rows: max-content;
    grid-column-gap: 30px;
  }
`;

export const PlanContainer = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content auto max-content max-content;
  grid-row-gap: 20px;
  background: white;
  border-radius: 5px;
  border: 1px solid #f3f3f3;
  justify-self: center;
`;
