const convertPodcastNameToURL = (
  name: string | undefined,
  podcastAppleId: number | undefined
): string => {
  if (name === "" || name === undefined || podcastAppleId === undefined) {
    return `/episode/episode/${podcastAppleId}`;
  } else {
    const podcastNameLower = name.toLowerCase();
    const podcastNameWithoutSpaces = podcastNameLower.replace(/\s+/g, "-");
    const podcastNameWithoutDots = podcastNameWithoutSpaces.replace(
      /[^a-zA-Z0-9-]/g,
      ""
    );
    return `/podcast/${podcastNameWithoutDots}/${podcastAppleId}`;
  }
};

export default convertPodcastNameToURL;
