const convertEpisodeNameToURL = (
  title: string,
  podcastAppleId: number
): string => {
  if (title === "") {
    return `/episode/episode/${podcastAppleId}`;
  } else {
    const episodeNameLower = title.toLowerCase();
    const episodeNameWithoutSpaces = episodeNameLower.replace(/\s+/g, "-");
    const episodeNameWithoutDots = episodeNameWithoutSpaces.replace(
      /[^a-zA-Z0-9-]/g,
      ""
    );
    return `/episode/${episodeNameWithoutDots}/${podcastAppleId}`;
  }
};

export default convertEpisodeNameToURL;
