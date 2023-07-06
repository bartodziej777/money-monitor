import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form as StyledForm,
  Heading as StyledHeading,
  Label as StyledLabel,
  Input as StyledInput,
  Submit as StyledSubmit,
  Error as StyledError,
  Redirect as StyledRedirect,
  Info as StyledInfo,
} from "../../styles/Form.style";
import { Link, useNavigate } from "react-router-dom";
import { AUTH } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

type Inputs = {
  email: string;
  password1: string;
  password2: string;
};

type StatusType = {
  error: boolean;
  message: string;
};

export default function Signup() {
  const [status, setStatus] = useState<StatusType>({
    error: false,
    message: "",
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await createUserWithEmailAndPassword(AUTH, data.email, data.password1);

      setStatus({
        error: false,
        message: "Successful registration. You will be redirected shortly",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setStatus({
        error: true,
        message: "Something went wrong. Try again later",
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
      <StyledHeading>Signup</StyledHeading>
      {status.message.length > 1 && status.error ? (
        <StyledError>{status.message}</StyledError>
      ) : (
        ""
      )}
      {status.message.length > 1 && !status.error ? (
        <StyledInfo>{status.message}</StyledInfo>
      ) : (
        ""
      )}
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <StyledInput
        type="email"
        placeholder="Enter email"
        {...register("email", { required: "It is required" })}
      />
      {errors.email && <StyledError> {errors.email.message} </StyledError>}
      <StyledLabel htmlFor="password1">Password</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Enter password"
        {...register("password1", {
          required: "It is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
          maxLength: {
            value: 20,
            message: "Password cannot be longer than 20 characters",
          },
        })}
      />
      {errors.password1 && (
        <StyledError>{errors.password1.message}</StyledError>
      )}
      <StyledLabel htmlFor="password2">Confirm password</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Enter password"
        {...register("password2", {
          required: "It is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
          maxLength: {
            value: 20,
            message: "Password cannot be longer than 20 characters",
          },
          validate: (value) =>
            value === getValues("password1") ||
            "The passwords are not the same",
        })}
      />
      {errors.password2 && (
        <StyledError>{errors.password2.message}</StyledError>
      )}
      <StyledSubmit type="submit" value="Submit" />
      <StyledRedirect>
        Already registerd <Link to="/login">log in?</Link>
      </StyledRedirect>
    </StyledForm>
  );
}
