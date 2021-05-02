import React, { useState, useEffect, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import { Input, Stack, Button, Heading, Text } from "@chakra-ui/react";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPodcastsWithOnlyAvatarList from "src/components/Skeletons/SkeletonPodcastsWithOnlyAvatarList/SkeletonPodcastsWithOnlyAvatarList";

import { SearchContainer, SearchSkeletonContainer } from "./Search.styles";

import Results from "./Results/Results";

const Search = () => {
  const { reset } = useQueryErrorResetBoundary();
  const [text, setText] = useState<string>("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Scrollbars
      onScrollFrame={() => {}}
      autoHide
      autoHideTimeout={100}
      autoHideDuration={100}
    >
      <SearchContainer>
        <Stack direction="column" spacing="10px">
          <Heading as="h2" fontSize={36} textAlign="center">
            Search
          </Heading>

          <Text
            color="#6F6F6F"
            fontSize={16}
            lineHeight="30px"
            fontWeight="300"
            textAlign="center"
          >
            You can search your podcasts here and we'll help you to find the
            right one.
          </Text>

          <Stack direction="row" spacing="0px">
            <Input
              variant="light"
              pr="4.5rem"
              type="text"
              size="lg"
              placeholder="Search for a podcast by title, author or owner"
              onChange={onHandleChange}
              borderTopRightRadius="0px"
              borderBottomRightRadius="0px"
            />

            <Button
              type="submit"
              variant="main"
              disabled={!text}
              size="lg"
              borderTopLeftRadius="0px"
              borderBottomLeftRadius="0px"
            >
              Search
            </Button>
          </Stack>
        </Stack>

        {text && (
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
            <Suspense
              fallback={
                <SearchSkeletonContainer>
                  <SkeletonPodcastsWithOnlyAvatarList />
                </SearchSkeletonContainer>
              }
            >
              <Results text={text} />
            </Suspense>
          </ErrorBoundary>
        )}
      </SearchContainer>
    </Scrollbars>
  );
};

export default Search;
