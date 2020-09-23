import React from "react";

import {
  PlansContainer,
  PlansHeader,
  PlansContent,
  PlanRow,
} from "./Plans.styles";

import usePlans from "src/hooks/usePlans";

import Paragraph from "src/system/Paragraph/Paragraph";

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

  return (
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
  );
};

export default Plans;
