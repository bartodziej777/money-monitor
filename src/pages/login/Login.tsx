import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form as StyledForm,
  Heading as StyledHeading,
  Label as StyledLabel,
  Input as StyledInput,
  Submit as StyledSubmit,
  Error as StyledError,
  Redirect as StyledRedirect,
} from "../../styles/Form.style";
import { Link } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleOnSubmit)}>
      <StyledHeading>Login</StyledHeading>
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <StyledInput
        type="email"
        placeholder="Enter email"
        {...register("email", { required: true })}
      />
      {errors.email && <StyledError>It's required</StyledError>}
      <StyledLabel htmlFor="password">Password</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Enter password"
        {...register("password", { required: true })}
      />
      {errors.password && <StyledError>It's required</StyledError>}
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
