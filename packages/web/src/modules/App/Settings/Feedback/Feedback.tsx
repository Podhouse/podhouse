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
  Textarea,
} from "@chakra-ui/react";

interface FeedbackFormProps {
  email: string;
  name: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  name: Yup.string().required("Name is required"),
  message: Yup.string().required("Message is required"),
});

const Feedback = () => {
  const { toggleColorMode } = useColorMode();

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
          <Heading fontSize="24px">Feedback</Heading>
          <Text>
            Please let us know if you have any issues, feature requests, etc.
          </Text>
        </Stack>

        <Stack direction="column" spacing="10px">
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

          <FormControl isInvalid={errors.name && true}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              variant="light"
              type="text"
              placeholder="Email address"
              {...register("name")}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.message && true}>
            <FormLabel htmlFor="message">Name</FormLabel>
            <Textarea
              id="message"
              type="text"
              placeholder="Message"
              {...register("message")}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <Button onClick={toggleColorMode} variant="main" width="100%">
            Send feedback
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Feedback;
