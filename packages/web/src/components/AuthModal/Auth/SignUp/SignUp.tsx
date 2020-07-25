import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import {
  AuthTextContainer,
  AuthText,
  AuthFormContainer,
  AuthLinksContainer,
  AuthParagraphLink,
  AuthCircle,
} from "../Auth.styles";

import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

interface SignUpFormProps {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<SignUpFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthTextContainer>
        <AuthText>The best way to listen to your favorite podcasts</AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
          height={40}
          ref={register}
          error={errors.email?.message}
        />

        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          height={40}
          ref={register}
          error={errors.password?.message}
        />

        <Button type="submit" height={40}>
          Sign up
        </Button>

        <AuthLinksContainer>
          <AuthParagraphLink onClick={() => send("SIGNIN")}>
            Already have an account?
          </AuthParagraphLink>

          <AuthCircle />

          <AuthParagraphLink onClick={() => send("FORGOT")}>
            Forgot your password?
          </AuthParagraphLink>
        </AuthLinksContainer>
      </AuthFormContainer>
    </>
  );
};

export default SignUp;
