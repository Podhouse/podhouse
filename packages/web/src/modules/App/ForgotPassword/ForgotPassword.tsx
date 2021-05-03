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

interface ForgotPasswordFormProps {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  const { toggleColorMode } = useColorMode();

  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ForgotPasswordFormProps>({
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

        <Button onClick={toggleColorMode} variant="main" width="100%">
          Send reset link
        </Button>
      </Stack>
    </Box>
  );
};

export default ForgotPassword;
