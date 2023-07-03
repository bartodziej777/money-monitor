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

export default function Forgot() {
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
      <StyledHeading>Forgot password</StyledHeading>
      <StyledLabel htmlFor="email">
        Reset your password via your email
      </StyledLabel>
      <StyledInput
        type="email"
        placeholder="Enter email"
        {...register("email", { required: "It is required" })}
      />
      {errors.password && <StyledError>{errors.password.message}</StyledError>}
      <StyledSubmit type="submit" value="Submit" />
      <StyledRedirect>
        Back to <Link to="/login">log in</Link>
      </StyledRedirect>
    </StyledForm>
  );
}
