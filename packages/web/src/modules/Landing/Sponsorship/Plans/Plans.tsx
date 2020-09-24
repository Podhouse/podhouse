import React from "react";

import {
  PlansWholeContainer,
  PlansContainer,
  PlansHeader,
  PlansContent,
  PlanRow,
  PlansPodcastSection,
  PlansPodcastInnerSection,
} from "./Plans.styles";

import Featured from "src/components/Featured/Featured";

import usePlans from "src/hooks/usePlans";

import Heading from "src/system/Heading/Heading";
import Paragraph from "src/system/Paragraph/Paragraph";
import Input from "src/system/Input/Input";
import Textarea from "src/system/Textarea/Textarea";
import Button from "src/system/Button/Button";

import { IPlan, IPlans } from "./Plans.types";

const plans: IPlans = [
  {
    category: "All",
    price: 499,
    available: 5,
    taps: 1800,
    subscriptions: 200,
  },
  {
    category: "Arts",
    price: 250,
    available: 5,
    taps: 900,
    subscriptions: 100,
  },
  {
    category: "Business",
    price: 499,
    available: 5,
    taps: 1600,
    subscriptions: 200,
  },
  {
    category: "Comedy",
    price: 250,
    available: 5,
    taps: 730,
    subscriptions: 60,
  },
  {
    category: "Education",
    price: 200,
    available: 5,
    taps: 400,
    subscriptions: 55,
  },
  {
    category: "Fiction",
    price: 150,
    available: 5,
    taps: 230,
    subscriptions: 25,
  },
  {
    category: "Government",
    price: 120,
    available: 5,
    taps: 160,
    subscriptions: 30,
  },
  {
    category: "Health & Fitness",
    price: 320,
    available: 5,
    taps: 820,
    subscriptions: 90,
  },
  {
    category: "History",
    price: 300,
    available: 5,
    taps: 690,
    subscriptions: 65,
  },
  {
    category: "Kids & Family",
    price: 120,
    available: 5,
    taps: 210,
    subscriptions: 35,
  },
  {
    category: "Leisure",
    price: 150,
    available: 5,
    taps: 350,
    subscriptions: 45,
  },
  {
    category: "Music",
    price: 150,
    available: 5,
    taps: 430,
    subscriptions: 50,
  },
  {
    category: "News",
    price: 499,
    available: 5,
    taps: 1600,
    subscriptions: 170,
  },
  {
    category: "Religion & Spirituality",
    price: 250,
    available: 5,
    taps: 450,
    subscriptions: 35,
  },
  {
    category: "Science",
    price: 250,
    available: 5,
    taps: 920,
    subscriptions: 85,
  },
  {
    category: "Society & Culture",
    price: 499,
    available: 5,
    taps: 1600,
    subscriptions: 155,
  },
  {
    category: "Sports",
    price: 150,
    available: 5,
    taps: 880,
    subscriptions: 75,
  },
  {
    category: "TV & Film",
    price: 300,
    available: 5,
    taps: 500,
    subscriptions: 45,
  },
  {
    category: "Technology",
    price: 3500,
    available: 5,
    taps: 900,
    subscriptions: 75,
  },
  {
    category: "True Crime",
    price: 150,
    available: 5,
    taps: 650,
    subscriptions: 55,
  },
];

const Plans = () => {
  const { current, handleSelect } = usePlans();

  const selected = current.context.selected;
  const currentPlan = current.context.plan;

  const renderPlans = () => {
    if (selected) {
      const plan: IPlan = plans.find((plan) => plan === currentPlan);

      return (
        <PlanRow
          selected={selected}
          key={plan.category}
          onClick={() => handleSelect(plan)}
        >
          <Paragraph variant="primary" size="normal">
            {plan.category}
          </Paragraph>
          <Paragraph variant="primary" size="normal">
            ${plan.price}
          </Paragraph>
          <Paragraph variant="primary" size="normal">
            {plan.available}
          </Paragraph>
          <Paragraph variant="primary" size="normal">
            {plan.taps}
          </Paragraph>
          <Paragraph variant="primary" size="normal">
            {plan.subscriptions}
          </Paragraph>
        </PlanRow>
      );
    } else {
      return plans.map((plan: IPlan) => (
        <PlanRow
          selected={selected}
          key={plan.category}
          onClick={() => handleSelect(plan)}
        >
          <Paragraph variant="secondary" size="normal">
            {plan.category}
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            ${plan.price}
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            {plan.available}
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            {plan.taps}
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            {plan.subscriptions}
          </Paragraph>
        </PlanRow>
      ));
    }
  };

  const featuredPodcast = {
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/99%25_Invisible_logo.jpg",
    name: "99% Invisible",
    author: "Roman Mars",
    description:
      "Design is everywhere in our lives, perhaps most importantly in the places where we've just stopped noticing. 99% Invisible is a weekly exploration of the process and power of design and architecture. From award winning producer Roman Mars. Learn more at 99percentinvisible.org.  A proud member of Radiotopia, from PRX. Learn more at radiotopia.fm.",
  };

  return (
    <PlansWholeContainer selected={selected}>
      <PlansContainer>
        <PlansHeader>
          <Paragraph variant="secondary" size="normal">
            Category
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            Price
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            Available
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            Taps
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            Subscriptions
          </Paragraph>
        </PlansHeader>

        <PlansContent selected={selected}>{renderPlans()}</PlansContent>
      </PlansContainer>

      <PlansPodcastSection selected={selected}>
        <PlansPodcastInnerSection>
          <Heading as="h2" variant="primary" size="normal" fontSize={24}>
            Choose your podcast
          </Heading>

          <Paragraph variant="secondary" size="normal">
            Podcast listeners are very highly engaged, you can grow your
            audience by advertising with us
          </Paragraph>

          <Input
            type="text"
            name="name"
            placeholder="Search podcast"
            variant="primary"
            scale="normal"
            error=""
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
          />
        </PlansPodcastInnerSection>

        <Featured featured={[featuredPodcast]} />

        <PlansPodcastInnerSection>
          <Button type="button" variant="success" size="big" width={160}>
            Pay now
          </Button>
        </PlansPodcastInnerSection>
      </PlansPodcastSection>
    </PlansWholeContainer>
  );
};

export default Plans;
