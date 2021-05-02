import axios, { AxiosRequestConfig } from "axios";
import crypto from "crypto";
import { useQuery } from "react-query";

import { EpisodesResult, Episode } from "./types";

const API_SECRET: string = "x6QP5r$YqsUQdBfKuqUB4rdn8cSbNT9fTccBcjx2";

const apiHeaderTime = Math.floor(Date.now() / 1000);
const sha1Algorithm: string = "sha1";
const sha1Hash = crypto.createHash(sha1Algorithm);
const data4Hash: string =
  process.env.REACT_APP_API_KEY + API_SECRET + apiHeaderTime;
sha1Hash.update(data4Hash);
const hash4Header: string = sha1Hash.digest("hex");

const useEpisodes = (id: number) => {
  const options: AxiosRequestConfig = {
    method: "get",
    url: `https://api.podcastindex.org/api/1.0/episodes/byfeedid?id=${id}&max=25`,
    headers: {
      "X-Auth-Date": "" + apiHeaderTime,
      "X-Auth-Key": process.env.REACT_APP_API_KEY,
      Authorization: hash4Header,
      "User-Agent": "SuperPodcastPlayer/1.8",
    },
  };

  return useQuery<EpisodesResult, Episode, any>(
    ["episodes", id],
    async () => {
      const { data } = await axios(options);
      return data;
    },
    {
      retry: 10,
      enabled: Boolean(id),
      suspense: true,
    }
  );
};

export default useEpisodes;
