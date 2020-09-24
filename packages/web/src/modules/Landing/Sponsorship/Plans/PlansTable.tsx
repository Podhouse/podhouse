import React from "react";

import {
  PlansContainer,
  PlansHeader,
  PlansContent,
  PlanRow,
} from "./Plans.styles";

import Paragraph from "src/system/Paragraph/Paragraph";

import { IPlan, IPlans } from "./Plans.types";

interface PlansTableProps {
  selected: boolean;
  plans: IPlans;
  currentPlan: IPlan;
  handleSelect: (plan: IPlan) => void;
}

const PlansTable = ({
  selected,
  plans,
  currentPlan,
  handleSelect,
}: PlansTableProps) => {
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

export default PlansTable;
