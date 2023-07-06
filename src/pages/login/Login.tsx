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
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/userSlice";

type Inputs = {
  email: string;
  password: string;
};

type StatusType = {
  error: boolean;
  message: string;
};

export default function Login() {
  const [status, setStatus] = useState<StatusType>({
    error: false,
    message: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        AUTH,
        data.email,
        data.password
      );
      dispatch(
        login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );

      setStatus({
        error: false,
        message: "Login successful. You will be redirected shortly.",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setStatus({
        error: true,
        message: "Login failed.",
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
      <StyledHeading>Login</StyledHeading>
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
      {errors.email && <StyledError>{errors.email.message}</StyledError>}
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Enter password"
        {...register("password", { required: "It is required" })}
      />
      {errors.password && <StyledError>{errors.password.message}</StyledError>}
      <StyledRedirect>
        Forgot <Link to="/forgot">password?</Link>
      </StyledRedirect>
      <StyledSubmit type="submit" value="Submit" />
      <StyledRedirect>
        Do not have an account? <Link to="/signup">Sign up</Link>
      </StyledRedirect>
    </StyledForm>
  );
}
