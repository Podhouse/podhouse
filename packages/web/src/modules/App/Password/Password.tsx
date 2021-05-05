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

interface PasswordFormProps {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Password = () => {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PasswordFormProps>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    alert("submitted!!!");
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
          Password
        </Heading>

        <Text
          color="#6F6F6F"
          fontSize={16}
          lineHeight="30px"
          fontWeight="300"
          textAlign="start"
        >
          We'll send you a confirmation email for your new password
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

      <FormControl isInvalid={errors.passwordConfirmation && true}>
        <FormLabel htmlFor="passwordConfirmation">
          Confirm new password
        </FormLabel>
        <Input
          id="passwordConfirmation"
          variant="light"
          type="password"
          placeholder="Confirm new password"
          {...register("passwordConfirmation")}
        />
        <FormErrorMessage>
          {errors.passwordConfirmation && errors.passwordConfirmation.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        variant="main"
        width="100%"
        isDisabled={isSubmitting || !isValid}
      >
        Change password
      </Button>
    </Stack>
  );
};

export default Password;
