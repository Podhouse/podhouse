import { styled } from "../../../system/theme";

export const BrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, max-content);
  grid-row-gap: 50px;
  padding: 30px 30px 0px 30px;
`;

export const StyledSection = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px minmax(min-content, max-content);
    grid-row-gap: 20px;
  }
`;

export const SectionTitle = styled.h1`
  font-family: Inter;
  font-weight: 600;
  font-size: 1rem;
  align-self: center;
  justify-self: flex-start;
`;

export const SectionPodcasts = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-template-columns: auto-fill;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

export const SectionNavigation = styled.div`
  width: 40px;
  height: 100%;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionHeader = styled.div`
  width: 100%;
  height: 50px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(160, 160, 160, 0.3);
`;
