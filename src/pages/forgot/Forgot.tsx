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
  IconWithText as StyledIconWithText,
} from "../../styles/Form.style";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { AUTH } from "../../config/firebase";
import { FaPaperPlane } from "react-icons/fa";

type Inputs = {
  email: string;
};

type StatusType = {
  error: boolean;
  message: string;
};

export default function Forgot() {
  const [status, setStatus] = useState<StatusType>({
    error: true,
    message: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await sendPasswordResetEmail(AUTH, data.email);

      setStatus({ error: false, message: "" });
    } catch (err: any) {
      if (err.code) {
        setStatus({ error: true, message: "User not found, try again!" });
      } else {
        setStatus({
          error: true,
          message: "Something went wrong. Try again later!",
        });
      }
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
      <StyledHeading>Forgot password</StyledHeading>
      {status.error ? (
        <>
          {status.message.length > 1 && status.error ? (
            <StyledError>{status.message}</StyledError>
          ) : (
            ""
          )}
          <StyledLabel htmlFor="email">
            Reset your password via your email
          </StyledLabel>
          <StyledInput
            type="email"
            placeholder="Enter email"
            {...register("email", { required: "It is required" })}
          />
          {errors.email && <StyledError>{errors.email.message}</StyledError>}
          <StyledSubmit type="submit" value="Submit" />
        </>
      ) : (
        <StyledIconWithText>
          <FaPaperPlane />
          <p>
            We have sent you a link to reset your password. Check your mailbox.
          </p>
        </StyledIconWithText>
      )}
      <StyledRedirect>
        Back to <Link to="/login">log in</Link>
      </StyledRedirect>
    </StyledForm>
  );
}
