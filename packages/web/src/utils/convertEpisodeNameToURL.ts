const convertEpisodeNameToURL = (
  title: string | undefined,
  podcastAppleId: number
): string => {
  if (title === "" || title === undefined || podcastAppleId === undefined) {
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
