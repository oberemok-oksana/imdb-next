"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { loginUser } from "../actions";
import { notify, notifyError } from "../lib/notify";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

const LogIn = () => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleLogIn = async (email: string, password: string) => {
    const user = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (user.data.user?.role) {
      reset();
      router.push("/");
    } else {
      notifyError("The wrong password");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form
        className="form"
        onSubmit={handleSubmit((data) =>
          handleLogIn(data.email, data.password)
        )}
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
