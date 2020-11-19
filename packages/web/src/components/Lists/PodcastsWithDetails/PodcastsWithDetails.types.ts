import { TrendingQueryResponse } from "src/modules/App/Browse/Trending/__generated__/TrendingQuery.graphql";

export interface PodcastsWithDetailsProps {
  title: string;
  podcasts: TrendingQueryResponse;
}
