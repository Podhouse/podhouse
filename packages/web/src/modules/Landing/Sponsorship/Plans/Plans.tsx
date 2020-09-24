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

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";
import Textarea from "src/system/Textarea/Textarea";
import Button from "src/system/Button/Button";

import plans from "src/utils/plans";
import escapeRegexCharacters from "src/utils/escapeRegexCharacters";

import { Podcast, Podcasts } from "./Plans.types";

const podcasts: Podcasts = [
  {
    id: 1,
    name: "99% Invisible",
    author: "Roman Mars",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    description:
      "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.  A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.",
  },
  {
    id: 2,
    name: "Nerdcast",
    author: "Nerdcast",
    avatar:
      "https://imgsvr.radiocut.site/get/thumb/900/900/shows_logos/6d/3c/6d3c0fda-9667-4802-97e4-6dceed4171e8.jpg",
    description:
      "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.  A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.",
  },
  {
    id: 3,
    name: "The Joe Rogan Experience",
    author: "Joe Rogan",
    avatar:
      "https://www.meetinleeds.co.uk/wp-content/uploads/2017/02/Joe-Rogan.jpg",
    description:
      "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.  A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.",
  },
  {
    id: 4,
    name: "All Ears English Podcast",
    author: "Lindsay McMahon",
    avatar: "https://pbcdn1.podbean.com/imglogo/dir-logo/213729/213729.jpg",
    description:
      "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.  A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.",
  },
];

const getSuggestions = (value, podcasts: Podcasts) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");

  return podcasts.filter((podcast: Podcast) =>
    regex.test(getSuggestionValue(podcast)),
  );
};

const getSuggestionValue = ({ name }: Podcast) => `${name}`;

const renderSuggestion = ({ name, avatar }: Podcast) => (
  <SuggestionContent>
    <SuggestionImage src={avatar} />
    <SuggestText>{name}</SuggestText>
  </SuggestionContent>
);

const Plans = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState<string>("");
  const [featuredPodcast, setFeaturedPodcast] = useState<Podcast | undefined>({
    id: 0,
    avatar: "",
    name: "",
    author: "",
    description: "",
  });

  const onChange = (_, { newValue }) => setValue(newValue);

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, podcasts));
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

        <Featured featured={[featuredPodcast]} />

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
