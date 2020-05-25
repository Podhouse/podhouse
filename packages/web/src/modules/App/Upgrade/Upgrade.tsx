import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../system/Button/Button";
import Input from "../../../system/Input/Input";

import useUpgrade from "../../../hooks/useUpgrade";

import {
  UpgradeContainer,
  UpgradeInsideContainer,
  UpgradeXgruveLogo,
  UpgradeTitle,
  UpgradeParagraph,
  UpgradePlansContainer,
  UpgradePlanContainer,
  UpgradePlanTitle,
  UpgradePlanPrice,
  UpgradeFormContainer,
  UpgradeFormCVCDateContainer,
} from "./Upgrade.styles";

interface UpgradeFormProps {
  cardNumber: string;
  cvc: string;
  expirationDate: string;
}

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string().required("Card number is required"),
  cvc: Yup.string().required("CVC is required"),
  expirationDate: Yup.string().required("Expiration date is required"),
});

const Upgrade: React.FC = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<UpgradeFormProps>({
    initialValues: {
      cardNumber: "",
      cvc: "",
      expirationDate: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  const { upgrade, handleMonthly, handleYearly } = useUpgrade();

  return (
    <Scrollbars universal autoHide autoHideTimeout={100} autoHideDuration={100}>
      <UpgradeContainer>
        <UpgradeInsideContainer>
          <UpgradeXgruveLogo>xgruve</UpgradeXgruveLogo>
          <UpgradeTitle>Start your premium experience now</UpgradeTitle>
          <UpgradeParagraph>
            The perfect app to listen to your favorite podcasts is here, with a
            ton of features for avid podcast listeners and an intuitive UI
            design.
          </UpgradeParagraph>

          <UpgradePlansContainer>
            <UpgradePlanContainer
              onClick={handleMonthly}
              selected={upgrade.matches("monthly")}
            >
              <UpgradePlanTitle>Monthly</UpgradePlanTitle>

              <UpgradePlanPrice>US$ 3.99</UpgradePlanPrice>
            </UpgradePlanContainer>

            <UpgradePlanContainer
              onClick={handleYearly}
              selected={upgrade.matches("yearly")}
            >
              <UpgradePlanTitle>Yearly</UpgradePlanTitle>

              <UpgradePlanPrice>US$ 39.99</UpgradePlanPrice>
            </UpgradePlanContainer>
          </UpgradePlansContainer>

          <UpgradeFormContainer onSubmit={handleSubmit}>
            <Input
              type="text"
              name="cardNumber"
              label="Card number"
              placeholder="Card number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cardNumber}
              error={errors.cardNumber}
            />

            <UpgradeFormCVCDateContainer>
              <Input
                type="text"
                name="cvc"
                label="CVC"
                placeholder="CVC"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cvc}
                error={errors.cvc}
              />

              <Input
                type="text"
                name="expirationDate"
                label="Expiration date"
                placeholder="Expiration date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expirationDate}
                error={errors.expirationDate}
              />
            </UpgradeFormCVCDateContainer>

            <Button type="submit" submitting={isSubmitting}>
              Start for US$ 3.99/mo
            </Button>
          </UpgradeFormContainer>
        </UpgradeInsideContainer>
      </UpgradeContainer>
    </Scrollbars>
  );
};

export default Upgrade;
