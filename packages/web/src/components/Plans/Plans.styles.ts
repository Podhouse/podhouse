import styled from "@emotion/styled";

type Props = {
  selected: boolean;
};

export const PlansWholeContainer = styled.div<Props>`
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ selected }) =>
    selected ? "max-content max-content" : "max-content"};
  grid-row-gap: 50px;
`;

export const PlansContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: max-content max-content;
  grid-column-gap: 10px;
`;

export const PlansHeader = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 7;
  width: 100%;
  height: 40px;
  background: #f3f3f3;
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-template-columns: minmax(min-content, 180px) repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  justify-items: flex-start;
`;

export const PlansContent = styled.div<Props>`
  grid-row: 2 / 3;
  grid-column: 1 / 7;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ selected }) =>
    selected ? "max-content" : "repeat(auto-fill, max-content"};
  grid-column-gap: 10px;
`;

export const PlanRow = styled.div<Props>`
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: grid;
  grid-template-columns: minmax(min-content, 180px) repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  justify-items: flex-start;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
    p {
      color: #101010;
    }
  }
`;

export const PlansPodcastSection = styled.div<Props>`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content max-content;
  grid-row-gap: 50px;
  align-items: center;
  justify-items: center;
  display: ${({ selected }) => (selected ? "grid" : "none")};
  justify-self: center;
`;

export const PlansPodcastInnerSection = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 20px;
  align-items: center;
  justify-items: center;
  .react-autosuggest__container {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-autosuggest__input {
    width: 100%;
    max-width: 400px;
    height: 40px;
    text-indent: 20px;
    outline: 0;
    box-sizing: border-box;
    color: #6f6f6f;
    background-color: #f3f3f3;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    line-height: 17px;
    font-family: Inter;
    font-style: "normal";
    font-weight: "normal";
    font-size: 14px;
    &:focus {
      border: 1px solid rgba(16, 16, 16, 0.1);
    }
    :-moz-placeholder {
      font-family: Inter;
      line-height: 17px;
      text-indent: 20px;
    }
  }
  .react-autosuggest__suggestions-container {
    display: none;
  }
  .react-autosuggest__container--open
    .react-autosuggest__suggestions-container {
    display: block;
    position: absolute;
    top: 45px;
    width: 100%;
    max-width: 400px;
    outline: 0;
    box-sizing: border-box;
    color: #6f6f6f;
    background-color: #f3f3f3;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    line-height: 17px;
    font-family: Inter;
    font-style: "normal";
    font-weight: "normal";
    font-size: 14px;
    z-index: 2;
    &:focus {
      border: 1px solid rgba(16, 16, 16, 0.1);
    }
  }
  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 10px 20px;
  }
  .react-autosuggest__suggestion:not(:first-child) {
    border-top: 1px solid #ddd;
  }
  .react-autosuggest__suggestion--focused {
    background-color: red;
    color: #fff;
  }
  .suggestion-content {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
  }
  .name {
    margin-left: 68px;
    line-height: 45px;
  }
  .highlight {
    color: #000000;
    font-weight: bold;
  }
  .react-autosuggest__suggestion--focused .highlight {
    color: #120000;
  }
`;

export const SuggestionContent = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    background: red;
  }
`;

export const SuggestionImage = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  cursor: pointer;
`;

export const SuggestText = styled.p`
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  outline: 0;
  line-height: 25px;
`;
