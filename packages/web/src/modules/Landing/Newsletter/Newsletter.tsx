import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../../../system/Button/Button";
import Input from "../../../system/Input/Input";

import { NewsletterFormContainer } from "./Newsletter.styles";

import {
  LandingGridContainer,
  LandingGridContentContainer,
  LandingSubTitle,
  LandingParagraph,
} from "../Landing.styles";

interface NewsletterFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
});

const Newsletter = () => {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormik<NewsletterFormProps>({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <LandingGridContainer>
      <LandingGridContentContainer>
        <LandingSubTitle>Sign up for news and updates</LandingSubTitle>
        <LandingParagraph>
          Want to hear more news and updates about us? Sign up for our
          newsletter and we'll send you news and updates
        </LandingParagraph>
      </LandingGridContentContainer>

      <NewsletterFormContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          error={errors.email}
          dataTestId="newsletter-input"
        />
        <Button type="submit" width={120} submitting={isSubmitting}>
          Subscribe
        </Button>
      </NewsletterFormContainer>
    </LandingGridContainer>
  );
};

export default Newsletter;
