import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Box,
  Stack,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";

interface ResetPasswordFormProps {
  currentPassword: string;
  password: string;
  confirmNewPassword: string;
}

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string().when("password", {
    is: (val: string) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

const ResetPassword = () => {
  const { toggleColorMode } = useColorMode();

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
    <Box w="100%" h="100%" p="20px">
      <Stack
        as="form"
        onSubmit={onSubmit}
        direction="column"
        spacing="20px"
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
          <FormLabel htmlFor="newPassword">New password</FormLabel>
          <Input
            id="newPassword"
            variant="light"
            type="password"
            placeholder="New password"
            {...register("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.confirmNewPassword && true}>
          <FormLabel htmlFor="confirmNewPassword">
            Confirm new password
          </FormLabel>
          <Input
            id="confirmNewPassword"
            variant="light"
            type="password"
            placeholder="Confirm new password"
            {...register("confirmNewPassword")}
          />
          <FormErrorMessage>
            {errors.confirmNewPassword && errors.confirmNewPassword.message}
          </FormErrorMessage>
        </FormControl>

        <Button onClick={toggleColorMode} variant="main" width="100%">
          Change password
        </Button>
      </Stack>
    </Box>
  );
};

export default ResetPassword;
