// https://stackoverflow.com/a/2593661/710693
const escapeRegex = (str: string) =>
  `${str}`.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");

export default escapeRegex;
