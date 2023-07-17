"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { notify, notifyError } from "../lib/notify";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

const SignUp = () => {
  const {
    register,
    reset,
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
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async (email: string, password: string) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form
        className="form"
        onSubmit={handleSubmit(async (data) => {
          handleSignUp(data.email, data.password)
            .then(() => {
              reset();
              notify("Congrats! You'll receive a confirmation letter soon!");
            })
            .catch((err) =>
              notifyError(`${err.message.slice(-8, -1)} already exists`)
            );
        })}
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
