"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { getToken } from "../api";
import { useEffect, useState } from "react";

const SignUp = async () => {
  const [token, setToken] = useState("");

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

  useEffect(() => {
    getToken().then((token) => setToken(token));
  }, []);

  return (
    <>
      <h1>Sign Up</h1>

      <form
        className="form"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <input
          className="input"
          placeholder="First name"
          {...register("firstName", {
            required: "This field is required",
            minLength: { value: 2, message: "Min length 2" },
          })}
        />
        <p>{errors.firstName?.message}</p>
        <input
          className="input"
          placeholder="Last name"
          {...register("lastName", {
            required: "This field is required",
            minLength: { value: 2, message: "Min length 2" },
          })}
        />
        <p>{errors.lastName?.message}</p>

        <input
          className="input"
          placeholder="Phone"
          {...register("phone", {
            required: "This field is required",
            minLength: { value: 6, message: "Min length 6" },
          })}
        />
        <p>{errors.phone?.message}</p>

        <input
          className="input"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "It should be a valid email address",
            },
          })}
          placeholder="Email"
        />
        <p className="error">{errors.email?.message}</p>
        <input
          className="input"
          {...register("password", {
            required: "This field is required",
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Password"
        />
        <p className="error">{errors.password?.message}</p>

        <input className="submit" type="submit" />
      </form>
      <div className="text">
        <p>Already have an account?</p>
        <p>
          <Link className="link" href="/log-in">
            Click here to Log in
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;

// {
//   "success": true,
//   "expires_at": "2023-07-05 11:14:52 UTC",
//   "request_token": "023cd3c36b88fbfdca206dd757e8d3d188b49365"
// }
