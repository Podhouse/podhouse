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
} from "@chakra-ui/react";

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ForgotPasswordFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <Stack
      as="form"
      onSubmit={onSubmit}
      direction="column"
      spacing="10px"
      w="100%"
      h="100%"
      maxW="400px"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
    >
      <FormControl isInvalid={errors.email && true}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          variant="light"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="main"
        width="100%"
        isLoading={isSubmitting}
        isDisabled={!isValid}
      >
        Send reset link
      </Button>
    </Stack>
  );
};

export default ForgotPassword;
