const convertEpisodeNameToURL = (name: string, appleId: number): string => {
  const episodeNameLower = name.toLowerCase();
  const episodeNameWithoutSpaces = episodeNameLower.replace(/\s+/g, "-");
  const episodeNameWithoutDots = episodeNameWithoutSpaces.replace(
    /[^a-zA-Z0-9-]/g,
    ""
  );
  return `/episode/${episodeNameWithoutDots}/${appleId}`;
};

export default convertEpisodeNameToURL;
