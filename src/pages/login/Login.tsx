import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const handleOnSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <label htmlFor="email">Email</label>
      <input type="email" {...register("email", { required: true })} />
      {errors.email && <span>It's required</span>}
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <span>It is required</span>}
      <input type="submit" value="Submit" />
    </form>
  );
}
