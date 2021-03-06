import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Stack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react";

interface FeedbackFormProps {
  email: string;
  feedback: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  feedback: Yup.string().required("Message is required"),
});

const Feedback = () => {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FeedbackFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    console.log("submitted!");
  };

  return (
    <Stack
      as="form"
      onSubmit={onSubmit}
      direction="column"
      spacing="20px"
      p="20px"
      w="100%"
      h="100%"
      maxW="500px"
      margin="0 auto"
    >
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize={36} textAlign="start">
          Feedback
        </Heading>

        <Text>
          Please let us know if you have any issues, feature requests, etc
        </Text>
      </Stack>

      <FormControl isInvalid={errors.email && true}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          variant="light"
          type="email"
          placeholder="Email address"
          {...register("email")}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.feedback && true}>
        <FormLabel htmlFor="feedback">Feedback</FormLabel>
        <Textarea
          id="feedback"
          variant="light"
          type="text"
          placeholder="Leave your feedback, suggestion, or comment here"
          resize="none"
          {...register("feedback")}
        />
        <FormErrorMessage>
          {errors.feedback && errors.feedback.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="main"
        width="100%"
        isLoading={isSubmitting}
        isDisabled={!isValid}
      >
        Send feedback
      </Button>
    </Stack>
  );
};

export default Feedback;
