import chalk from "chalk";

import EpisodeModel, { IEpisode } from "../modules/Episode/EpisodeModel";

import { Episode } from "../types";

const saveEpisodeToDatabase = async (episodes: Array<Episode>) => {
  const mapEpisodesAndSaveToDatabase = episodes.map(
    async (episode: Episode) => {
      const episodeExistsOnDB: boolean = await EpisodeModel.exists({
        guid: episode.guid,
      });

      if (episodeExistsOnDB === false) {
        const newEpisode: IEpisode = await new EpisodeModel(episode).save();

        console.log(
          chalk.greenBright.bold(
            `✅ Episode ${chalk.white.bold(newEpisode.title)} saved.`,
          ),
        );
      } else {
        const actualEpisode: IEpisode = await EpisodeModel.findOne({
          guid: episode.guid,
        });
        console.log(
          chalk.yellowBright.bold(
            `🔸 Episode ${chalk.white.bold(
              actualEpisode.title,
            )} already exists on database.`,
          ),
        );
        return;
      }
    },
  );

  await Promise.all(mapEpisodesAndSaveToDatabase);
};

export default saveEpisodeToDatabase;
