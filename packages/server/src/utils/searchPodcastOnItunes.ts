import got from "got";

import { RawItunesPodcast, Results, Podcast } from "../types";

const searchPodcastOnItunes = async (name: string, feed: string) => {
  try {
    const options = {
      url: `https://itunes.apple.com/search?term=${name}&entity=podcast`,
      timeout: 120000,
      retry: {
        limit: 2,
        errorCodes: ["ECONNRESET", "ECONNREFUSED", "ENOTFOUND"],
      },
    };

    const { resultCount, results }: Results = await got(options).json();

    if (resultCount === 0) {
      throw new Error("Podcast does not exist on iTunes API");
    } else if (results.length === 1) {
      const podcastFromItunes: RawItunesPodcast = results.pop();

      const {
        collectionId,
        collectionName,
        artistName,
        feedUrl,
        country,
        primaryGenreName,
        artworkUrl600,
        genres,
        genreIds,
      } = podcastFromItunes;

      const podcast: Podcast = {
        appleId: collectionId,
        name: collectionName,
        author: artistName,
        description: "string",
        website: "string",
        rss: feedUrl,
        image: artworkUrl600,
        country: country,
        primaryGenre: primaryGenreName,
        genres,
        genreIds,
        owner: {
          name: "",
          email: "",
        },
      };

      return podcast;
    } else {
      const podcastFromItunes: RawItunesPodcast = results
        .filter(
          ({ collectionName }: RawItunesPodcast) => name === collectionName,
        )
        .pop();

      const {
        collectionId,
        collectionName,
        artistName,
        feedUrl,
        country,
        primaryGenreName,
        artworkUrl600,
        genres,
        genreIds,
      } = podcastFromItunes;

      const podcast: Podcast = {
        appleId: collectionId,
        name: collectionName,
        author: artistName,
        description: "string",
        website: "string",
        rss: feedUrl,
        image: artworkUrl600,
        country: country,
        primaryGenre: primaryGenreName,
        genres,
        genreIds,
        owner: {
          name: "",
          email: "",
        },
      };

      return podcast;
    }
  } catch (err) {
    console.log(err);
  }
};

export default searchPodcastOnItunes;
