import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";

import { AuthTextContainer, AuthText, AuthFormContainer } from "../Auth.styles";

import Input from "src/system/Input/Input";
import Button from "src/system/Button/Button";

import { useAuthContext } from "src/context/Auth/Auth";

interface ResetPasswordFormProps {
  newPassword: string;
  confirmNewPassword: string;
}

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Password is required"),
  confirmNewPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ResetPassword = () => {
  const [, , , send] = useAuthContext();

  const { register, handleSubmit, errors } = useForm<ResetPasswordFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <AuthTextContainer>
        <AuthText>
          Enter your new password and confirm, we will redirect after you set
          your new password.
        </AuthText>
      </AuthTextContainer>

      <AuthFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="password"
          name="newPassword"
          label="New password"
          placeholder="New password"
          height={40}
          ref={register}
          error={errors.newPassword?.message}
        />

        <Input
          type="password"
          name="confirmNewPassword"
          label="New password"
          placeholder="New password"
          height={40}
          ref={register}
          error={errors.confirmNewPassword?.message}
        />

        <Button type="submit" onClick={() => send("SUCCESS")} height={40}>
          Confirm new password
        </Button>
      </AuthFormContainer>
    </>
  );
};

export default ResetPassword;
