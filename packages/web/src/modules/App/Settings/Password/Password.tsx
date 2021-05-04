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
  useColorMode,
  Heading,
  Text,
} from "@chakra-ui/react";

interface PasswordFormProps {
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

const Password = () => {
  const { toggleColorMode } = useColorMode();

  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<PasswordFormProps>({
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
      >
        <Stack direction="column" spacing="10px">
          <Heading fontSize="24px">Password</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Stack>

        <Stack direction="column" spacing="10px">
          <FormControl isInvalid={errors.currentPassword && true}>
            <FormLabel htmlFor="currentPassword">Current password</FormLabel>
            <Input
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
      </Stack>
    </Box>
  );
};

export default Password;
