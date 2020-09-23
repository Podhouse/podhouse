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
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Arts",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Business",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Comedy",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Education",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Fiction",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Government",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Health & Fitness",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "History",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Kids & Family",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Leisure",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Music",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "News",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Religion & Spirituality",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Science",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Society & Culture",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Sports",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "TV & Film",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "Technology",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
  },
  {
    category: "True Crime",
    price: 1500,
    available: 5,
    views: 12000,
    taps: 400,
    subscriptions: 250,
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
            {plan.views}k
          </Paragraph>
          <Paragraph variant="primary" size="normal">
            {plan.taps}k
          </Paragraph>
          <Paragraph variant="primary" size="normal">
            {plan.subscriptions}k
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
            {plan.views}k
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            {plan.taps}k
          </Paragraph>
          <Paragraph variant="secondary" size="normal">
            {plan.subscriptions}k
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
            Views
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
