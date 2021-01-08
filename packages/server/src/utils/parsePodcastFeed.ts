import FeedParser from "feedparser";
import fetch from "node-fetch";
import format from "date-fns/format";
import { Types } from "mongoose";

import { Episode, FeedPodcast } from "../types";

import formatSeconds from "./formatSeconds";

function parsePodcastFeed(
  feed: string,
  podcastId: Types.ObjectId,
): Promise<FeedPodcast> {
  return new Promise((resolve, reject) => {
    const req = fetch(feed);
    const feedparser: FeedParser = new FeedParser({ feedurl: feed });

    const finalEpisodes: Array<Episode> = [];

    const feedPodcast: FeedPodcast = {
      description: "",
      website: "",
      owner: {
        name: "",
        email: "",
      },
      episodes: [],
    };

    req.then(
      (res) => {
        if (res.status !== 200) {
          reject("Bad status code");
        } else {
          res.body.pipe(feedparser);
        }
      },
      (err) => {
        reject(err);
      },
    );

    feedparser.on("error", (err) => {
      reject(err);
    });

    feedparser.on("readable", () => {
      try {
        const stream = feedparser;
        const meta = feedparser.meta;
        let item: FeedParser.Item;

        if (item !== null) {
          const newItem: FeedParser.Item = stream.read();

          if (!newItem) return;

          const enclosure: FeedParser.Enclosure = newItem.enclosures.pop();
          const episodeDuration: string = newItem["itunes:duration"]["#"];
          let finalDuration: string;

          if (!episodeDuration) {
            return "";
          } else if (
            /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/.test(
              episodeDuration,
            )
          ) {
            finalDuration = episodeDuration;
          } else {
            const durationWithoutSpecialCharacters: string = episodeDuration.replace(
              /[^\w\s]/gi,
              "",
            );
            finalDuration = formatSeconds(durationWithoutSpecialCharacters);
          }

          let owner: { name: string | undefined; email: string | undefined } = {
            name: "",
            email: "",
          };

          if (newItem["itunes:owner"]) {
            const ownerName: string =
              newItem["itunes:owner"]["itunes:name"]["#"];
            const ownerEmail: string =
              newItem["itunes:owner"]["itunes:email"]["#"];

            owner.name = ownerName;
            owner.email = ownerEmail;
          } else {
            owner.name = "";
            owner.email = "";
          }

          feedPodcast.description = meta.description;
          feedPodcast.website = meta.link;
          feedPodcast.owner = owner;

          const episode: Episode = {
            title: newItem.title,
            description: newItem.description,
            publishedDate: format(new Date(newItem.pubdate), "LLL dd, uuuu"),
            link: newItem.link,
            image: newItem.image.url,
            audio: enclosure.url,
            guid: newItem.guid,
            duration: finalDuration,
            generator: meta.generator,
            owner,
            podcast: podcastId,
          };

          finalEpisodes.push(episode);
        }
      } catch (err) {
        reject(err);
      }
    });

    feedparser.on("end", () => {
      feedPodcast.episodes = finalEpisodes;
      resolve(feedPodcast);
    });
  });
}

export default parsePodcastFeed;
