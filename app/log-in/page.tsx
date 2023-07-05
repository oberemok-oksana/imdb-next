"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
  });
  return (
    <>
      <h1>Login</h1>
      <form
        className="form"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          className="input"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "It should be a valid email address",
            },
          })}
          placeholder="Your email"
        />
        <p className="error">{errors.email?.message}</p>
        <input
          className="input"
          {...register("password", {
            required: "This field is required",
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Your password"
        />
        <p className="error">{errors.password?.message}</p>

        <input className="submit" type="submit" />
      </form>
      <div className="text">
        <p>You still don&apos;t have an account?</p>
        <p>
          <Link href="/sign-up" className="link">
            Click here to sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default LogIn;
