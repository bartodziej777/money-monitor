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
  password1: string;
  password2: string;
};

export default function Signup() {
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
      <StyledHeading>Signup</StyledHeading>
      <StyledLabel htmlFor="email">Email</StyledLabel>
      <StyledInput
        type="email"
        placeholder="Enter email"
        {...register("email", { required: true })}
      />
      {errors.email && <StyledError>It's required</StyledError>}
      <StyledLabel htmlFor="password1">Password</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Enter password"
        {...register("password1", { required: true })}
      />
      {errors.password1 && <StyledError>It's required</StyledError>}
      <StyledLabel htmlFor="password2">Confirm password</StyledLabel>
      <StyledInput
        type="password"
        placeholder="Enter password"
        {...register("password2", { required: true })}
      />
      {errors.password2 && <StyledError>It's required</StyledError>}
      <StyledSubmit type="submit" value="Submit" />
      <StyledRedirect>
        Already registerd <Link to="/login">log in?</Link>
      </StyledRedirect>
    </StyledForm>
  );
}
