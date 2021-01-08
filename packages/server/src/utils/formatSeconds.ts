const formatSeconds = (length: number | string): string => {
  const lengthNumber = Number(length);
  const date = new Date(1970, 0, 1);
  date.setSeconds(lengthNumber);
  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
};

export default formatSeconds;
