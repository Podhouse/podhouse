const convertPodcastNameToURL = (name: string, appleId: number): string => {
  const podcastNameLower = name.toLowerCase();
  const podcastNameWithoutSpaces = podcastNameLower.replace(/\s+/g, "-");
  const podcastNameWithoutDots = podcastNameWithoutSpaces.replace(
    /[^a-zA-Z0-9-]/g,
    ""
  );
  return `/podcast/${podcastNameWithoutDots}/${appleId}`;
};

export default convertPodcastNameToURL;
