const convertDurationToSeconds = (duration: string | undefined) => {
  if (!duration) return 0;
  const [hours, minutes, seconds] = duration.split(":");
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
};

export default convertDurationToSeconds;
