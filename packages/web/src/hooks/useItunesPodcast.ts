import useSWR from "swr";

const URL = "https://itunes.apple.com/search?media=podcast&term=";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

const useItunesPodcast = (podcast: string) => {
  const { data, error } = useSWR(`${URL}${podcast}`, fetcher, {
    refreshInterval: 2000,
  });

  return {
    data,
    loading: !error && !data,
    error,
  };
};

export default useItunesPodcast;
