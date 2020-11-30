const escapeRegexCharacters = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default escapeRegexCharacters;
