import { createLoader } from "@podhouse/graphql";

import { registerLoader } from "../Loader/LoaderRegister";

import EpisodeModel from "./EpisodeModel";
import { episodeFilterMapping } from "./EpisodeFilterInputType";

const { Wrapper: Episode, getLoader, clearCache, load, loadAll } = createLoader(
  {
    model: EpisodeModel,
    loaderName: "EpisodeLoader",
    filterMapping: episodeFilterMapping,
  },
);

export { getLoader, clearCache, load, loadAll };
export default Episode;

registerLoader("EpisodeLoader", getLoader);
