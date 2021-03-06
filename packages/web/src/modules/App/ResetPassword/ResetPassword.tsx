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
} from "@chakra-ui/react";

interface ResetPasswordFormProps {
  currentPassword: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("Current password is required")
    .min(8, "Current password should be 8 chars minimum"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "New password should be 8 chars minimum"),
});

const ResetPassword = () => {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ResetPasswordFormProps>({
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
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="column" spacing="10px">
        <Heading as="h1" fontSize="36px" textAlign="center">
          Podhouse
        </Heading>

        <Text fontSize="16px" lineHeight="30px" textAlign="center">
          The best podcast in the web to listen to your favorites podcasts
        </Text>
      </Stack>

      <FormControl isInvalid={errors.currentPassword && true}>
        <FormLabel htmlFor="currentPassword">Current password</FormLabel>
        <Input
          id="currentPassword"
          variant="light"
          type="password"
          placeholder="Current password"
          {...register("currentPassword")}
        />
        <FormErrorMessage>
          {errors.currentPassword && errors.currentPassword.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.password && true}>
        <FormLabel htmlFor="password">New password</FormLabel>
        <Input
          id="password"
          variant="light"
          type="password"
          placeholder="New password"
          {...register("password")}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="main"
        width="100%"
        isLoading={isSubmitting}
        isDisabled={!isValid}
      >
        Change password
      </Button>
    </Stack>
  );
};

export default ResetPassword;
