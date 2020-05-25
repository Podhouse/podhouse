import { styled } from "../../../system/theme";

export const NewsletterFormContainer = styled.form`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 480px) {
    width: 100%;
    max-width: 600px;
    grid-template-columns: 1fr max-content;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
