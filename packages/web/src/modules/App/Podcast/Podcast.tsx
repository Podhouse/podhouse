import React, { useState, Suspense } from "react";
import Scrollbars from "react-custom-scrollbars";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import ErrorFallback from "src/components/ErrorFallback/ErrorFallback";
import SkeletonPodcastPage from "src/components/Skeletons/SkeletonPodcastPage/SkeletonPodcastPage";

import Header from "./Header/Header";
import Episodes from "./Episodes/Episodes";

import { PodcastContainer } from "./Podcast.styles";

const Podcast = () => {
  const { reset } = useQueryErrorResetBoundary();
  const [text, setText] = useState<string>("");

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Scrollbars autoHide autoHideTimeout={100} autoHideDuration={100}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
        <Suspense fallback={<SkeletonPodcastPage />}>
          <PodcastContainer>
            <Header />

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsSearch size="16px" color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search episodes"
                value={text}
                onChange={onHandleChange}
              />
            </InputGroup>

            <Episodes />
          </PodcastContainer>
        </Suspense>
      </ErrorBoundary>
    </Scrollbars>
  );
};

export default Podcast;
