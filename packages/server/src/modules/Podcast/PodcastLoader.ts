import PodcastModel from "./PodcastModel";
import { podcastFilterMapping } from "./PodcastFilterInputType";

import { registerLoader } from "../Loader/LoaderRegister";

import { createLoader } from "../../common/";

const { Wrapper: Podcast, getLoader, clearCache, load, loadAll } = createLoader(
  {
    model: PodcastModel,
    loaderName: "PodcastLoader",
    filterMapping: podcastFilterMapping,
  },
);

export { getLoader, clearCache, load, loadAll };
export default Podcast;

registerLoader("PodcastLoader", getLoader);
