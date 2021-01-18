import React from "react";
import { Text } from "@chakra-ui/react";

import {
  PlansContainer,
  PlansHeader,
  PlansContent,
  PlanRow,
} from "./Plans.styles";

export interface IPlan {
  category: string;
  price: number;
  available: number;
  taps: number;
  subscriptions: number;
}

export type IPlans = Array<IPlan>;

export interface Podcast {
  id: number;
  name: string;
  author: string;
  avatar: string;
  description: string;
}

export type Podcasts = Array<Podcast>;

interface PlansProps {
  selected: boolean;
  plans: IPlans;
  currentPlan: IPlan;
  handleSelect: (plan: IPlan) => void;
}

const Plans = ({ selected, plans, currentPlan, handleSelect }: PlansProps) => {
  const renderPlans = () => {
    if (selected) {
      const plan: any = plans.find((plan: any) => plan === currentPlan);

      return (
        <PlanRow
          selected={selected}
          key={plan.category}
          onClick={() => handleSelect(plan)}
        >
          <Text color="#101010" lineHeight="25px">
            {plan.category}
          </Text>
          <Text color="#101010" lineHeight="25px">
            ${plan.price}
          </Text>
          <Text color="#101010" lineHeight="25px">
            {plan.available}
          </Text>
          <Text color="#101010" lineHeight="25px">
            {plan.taps}
          </Text>
          <Text color="#101010" lineHeight="25px">
            {plan.subscriptions}
          </Text>
        </PlanRow>
      );
    } else {
      return plans.map((plan: IPlan) => (
        <PlanRow
          selected={selected}
          key={plan.category}
          onClick={() => handleSelect(plan)}
        >
          <Text color="#101010" lineHeight="25px">
            {plan.category}
          </Text>
          <Text color="#101010" lineHeight="25px">
            ${plan.price}
          </Text>
          <Text color="#101010" lineHeight="25px">
            {plan.available}
          </Text>
          <Text color="#101010" lineHeight="25px">
            {plan.taps}
          </Text>
          <Text color="#101010" lineHeight="25px">
            {plan.subscriptions}
          </Text>
        </PlanRow>
      ));
    }
  };

  return (
    <PlansContainer>
      <PlansHeader>
        <Text color="#101010" lineHeight="25px">
          Category
        </Text>
        <Text color="#101010" lineHeight="25px">
          Price
        </Text>
        <Text color="#101010" lineHeight="25px">
          Available
        </Text>
        <Text color="#101010" lineHeight="25px">
          Taps
        </Text>
        <Text color="#101010" lineHeight="25px">
          Subscriptions
        </Text>
      </PlansHeader>

      <PlansContent selected={selected}>{renderPlans()}</PlansContent>
    </PlansContainer>
  );
};

export default Plans;
