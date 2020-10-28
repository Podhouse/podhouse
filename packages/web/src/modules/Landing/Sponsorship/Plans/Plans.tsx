import React, { useState } from "react";
import Autosuggest from "react-autosuggest";

import {
  PlansWholeContainer,
  PlansPodcastSection,
  PlansPodcastInnerSection,
  SuggestionContent,
  SuggestionImage,
  SuggestText,
} from "./Plans.styles";

import PlansTable from "./PlansTable";

import Featured from "src/components/Featured/Featured";

import usePlans from "src/hooks/usePlans";
import useItunesPodcast from "src/hooks/useItunesPodcast";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";
import Textarea from "src/system/Textarea/Textarea";
import Button from "src/system/Button/Button";

import plans from "src/utils/plans";
import escapeRegexCharacters from "src/utils/escapeRegexCharacters";

import { PodcastResults, PodcastResult } from "./Plans.types";

const getSuggestions = (value, { results }: PodcastResults) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");

  return results.filter((podcast: PodcastResult) =>
    regex.test(getSuggestionValue(podcast)),
  );
};

const getSuggestionValue = ({ artistName }: PodcastResult) => `${artistName}`;

const renderSuggestion = ({ artistName, artworkUrl600 }: PodcastResult) => (
  <SuggestionContent>
    <SuggestionImage src={artworkUrl600} />
    <SuggestText>{artistName}</SuggestText>
  </SuggestionContent>
);

const Plans = () => {
  const [suggestions, setSuggestions] = useState<Array<PodcastResult>>([]);
  const [value, setValue] = useState<string>("");
  const [featuredPodcast, setFeaturedPodcast] = useState<PodcastResult | undefined>({
    wrapperType: "",
    kind: "",
    collectionId: null,
    trackId: null,
    artistName: "",
    collectionName: "",
    trackName: "",
    collectionCensoredName: "",
    trackCensoredName: "",
    collectionViewUrl: "",
    feedUrl: "",
    trackViewUrl: "",
    artworkUrl30: "",
    artworkUrl60: "",
    artworkUrl100: "",
    collectionPrice: "",
    trackPrice: "",
    trackRentalPrice: "",
    collectionHdPrice: "",
    trackHdPrice: "",
    trackHdRentalPrice: "",
    releaseDate: "",
    collectionExplicitness: "",
    trackExplicitness: "",
    trackCount: null,
    country: "",
    currency: "",
    primaryGenreName: "",
    contentAdvisoryRating: "",
    artworkUrl600: "",
    genreIds: [],
    genres: []
  });

  const { data } = useItunesPodcast(value);

  const onChange = (_, { newValue }) => setValue(newValue);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, data));
  };

  const onSuggestionsClearRequested = () => setSuggestions([]);

  const { current, handleSelect } = usePlans();

  const selected = current.context.selected;
  const currentPlan = current.context.plan;

  const checkProperties = (obj: any) => {
    for (const key in obj) {
      if (obj[key] !== null && obj[key] != "") return false;
    }
    return true;
  };

  const hasPodcastSelected = checkProperties(featuredPodcast);

  const shouldRenderSuggestions = (value) => {
    return value.trim().length > 3;
  }

  return (
    <PlansWholeContainer selected={selected}>
      <PlansTable
        selected={selected}
        plans={plans}
        currentPlan={currentPlan}
        handleSelect={handleSelect}
      />

      <PlansPodcastSection selected={selected}>
        <PlansPodcastInnerSection>
          <Heading as="h2" variant="primary" size="normal" fontSize={24}>
            Choose your podcast
          </Heading>

          <Paragraph variant="secondary" size="normal">
            Podcast listeners are very highly engaged, you can grow your
            audience by advertising with us
          </Paragraph>

          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            focusInputOnSuggestionClick={false}
            onSuggestionSelected={(_, { suggestion }) =>
              setFeaturedPodcast(suggestion)
            }
            inputProps={{
              placeholder: "Search podcast",
              value,
              onChange,
            }}
            shouldRenderSuggestions={shouldRenderSuggestions}
          />
        </PlansPodcastInnerSection>

        <PlansPodcastInnerSection>
          <Heading as="h2" variant="primary" size="normal" fontSize={24}>
            Choose your description
          </Heading>

          <Paragraph variant="secondary" size="normal">
            Podcast listeners are very highly engaged, you can grow your
            audience by advertising with us
          </Paragraph>

          <Textarea
            name="description"
            placeholder="Custom description"
            variant="primary"
            scale="normal"
            error=""
            aria-label="description"
            width={400}
          />
        </PlansPodcastInnerSection>

        <Featured featured={[{
          avatar: featuredPodcast.artworkUrl600,
          name: featuredPodcast.collectionName,
          author: featuredPodcast.artistName,
          description: featuredPodcast.artistName
        }]} />

        <PlansPodcastInnerSection>
          <Button
            type="button"
            variant="success"
            size="big"
            width={160}
            isDisabled={hasPodcastSelected}
          >
            Pay now
          </Button>
        </PlansPodcastInnerSection>
      </PlansPodcastSection>
    </PlansWholeContainer>
  );
};

export default Plans;
