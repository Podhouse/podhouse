import React, { ChangeEvent, useState, useCallback, useEffect, Suspense } from "react";
import { Heading, Text, Input } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import graphql from "babel-plugin-relay/macro";
import { GraphQLTaggedNode } from "react-relay";
import {
  useQueryLoader,
  usePreloadedQuery,
  usePaginationFragment,
  PreloadedQuery
} from "react-relay/hooks";
import { ErrorBoundary } from "react-error-boundary";
import { useDebounce } from "use-debounce";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";

import {
  PromoteContainer,
  PromoteContainerHeaderContainer,
} from "./Promote.styles";

import { PromoteQuery } from "./__generated__/PromoteQuery.graphql";
import { PromotePodcastPaginationQuery } from "./__generated__/PromotePodcastPaginationQuery.graphql";
import { PromotePodcast_podcasts$key } from "./__generated__/PromotePodcast_podcasts.graphql";

const promoteQuery = graphql`
  query PromoteQuery($podcastName: String!) {
    ...PromotePodcast_podcasts @arguments(podcastName: $podcastName)
  }
`;

const fragment = graphql`
  fragment PromotePodcast_podcasts on Query
  @argumentDefinitions(
    podcastName: { type: "String!" }
    after: { type: "String" }
    first: { type: "Int", defaultValue: 10 }
    before: { type: "String" }
    last: { type: "Int" }
  )
  @refetchable(queryName: "PromotePodcastPaginationQuery") {
    podcastsByName(
      podcastName: $podcastName
      after: $after
      first: $first
      before: $before
      last: $last
    )
      @connection(
        key: "PromotePodcast_podcastsByName"
        filters: ["podcastName"]
      ) {
      edges {
        node {
          id
          _id
          image
        }
      }
    }
  }
`;

const Promote = () => {
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false);

  const [queryReference, loadQuery, disposeQuery] = useQueryLoader<PromoteQuery>(
    promoteQuery
  );

  const [search, setSearch] = useState<string>("");

  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    return () => {
      disposeQuery();
    };
  }, [loadQuery, disposeQuery, debouncedSearch]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    loadQuery({ podcastName: debouncedSearch });
  }

  const onRefetchQuery = () => {
    loadQuery({ podcastName: debouncedSearch });
  };

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <PromoteContainer>
        <PromoteContainerHeaderContainer>
          <Heading
            color="#101010"
            as="h1"
            fontSize={36}
            letterSpacing="-0.03em"
            textAlign="start"
          >
            Promote on Podhouse
        </Heading>

          <Text color="#101010" lineHeight="25px" textAlign="start">
            Here you can find the latest updates on Podhouse and check the new features that landed on the app
        </Text>
        </PromoteContainerHeaderContainer>

        <Combobox aria-label="choose a fruit">
          <ComboboxInput as={Input} placeholder="Search your podcast" onChange={onSearch} />
          {queryReference && (
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={onRefetchQuery}
            >
              <Suspense
                fallback={<h1>Loading...</h1>}
              >
                <Popover promoteQuery={promoteQuery} queryReference={queryReference} shouldLoadMore={shouldLoadMore} />
              </Suspense>
            </ErrorBoundary>
          )}

        </Combobox>
      </PromoteContainer>
    </Scrollbars>
  );
};

interface Props {
  promoteQuery: GraphQLTaggedNode;
  queryReference: PreloadedQuery<PromoteQuery>;
  shouldLoadMore: boolean;
}

const Popover = ({ promoteQuery, queryReference, shouldLoadMore }: Props) => {
  const query = usePreloadedQuery<PromoteQuery>(promoteQuery, queryReference);

  const { data, loadNext, isLoadingNext } = usePaginationFragment<
    PromotePodcastPaginationQuery,
    PromotePodcast_podcasts$key
  >(fragment, query);

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(10);
  }, [isLoadingNext, loadNext]);

  if (shouldLoadMore === true) loadMore();

  console.log('data: ', data);

  return (
    <ComboboxPopover>
      <h1>combobox</h1>
    </ComboboxPopover>
  )
}

export default Promote;
