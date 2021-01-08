import chalk from "chalk";

import PodcastModel, { IPodcast } from "../modules/Podcast/PodcastModel";

import { Podcast } from "../types";

const savePodcastToDatabase = async (appleId: number, podcast: Podcast) => {
  const podcastExists: boolean = await PodcastModel.exists(podcast);

  if (podcastExists === false) {
    const newPodcast: IPodcast = await new PodcastModel(podcast).save();
    console.log(
      chalk.greenBright.bold(
        `✅ Podcast ${chalk.white.bold(newPodcast.name)} saved.`,
      ),
    );
    return newPodcast;
  } else {
    const actualPodcast: IPodcast = await PodcastModel.findOne({
      appleId: appleId,
    });
    console.log(
      chalk.yellowBright.bold(
        `🔸 Podcast ${chalk.white.bold(
          actualPodcast.name,
        )} already exists on database.`,
      ),
    );
    return actualPodcast;
  }
};

export default savePodcastToDatabase;
