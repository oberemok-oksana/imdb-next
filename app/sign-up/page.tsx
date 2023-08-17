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
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-slate-400">Sign Up</h1>
      <form
        className="  flex flex-col gap-4 w-80 mt-4 border-2 border-slate-400 py-6 px-6 rounded bg-slate-600"
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
          className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
          placeholder="First name"
          {...register("firstName", {
            required: "This field is required",
            minLength: { value: 2, message: "Min length 2" },
          })}
        />
        <p className="text-red-500">{errors.firstName?.message}</p>
        <input
          className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
          placeholder="Last name"
          {...register("lastName", {
            required: "This field is required",
            minLength: { value: 2, message: "Min length 2" },
          })}
        />
        <p className="text-red-500">{errors.lastName?.message}</p>

        <input
          className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "It should be a valid email address",
            },
          })}
          placeholder="Email"
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <input
          className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
          {...register("password", {
            required: "This field is required",
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Password"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <input
          className="p-2 bg-transparent font-semibold cursor-pointer rounded tracking-wide text-slate-400 uppercase border-2 border-slate-400 hover:border-slate-300 hover:transition active:border-slate-200 active:text-slate-300"
          type="submit"
        />
      </form>
      <div className="my-3">
        <p className="text-slate-400">Already have an account?</p>
        <p className="text-slate-400">
          <Link
            className="font-semibold text-slate-500 hover:text-slate-300 hover:transition"
            href="/log-in"
          >
            Click here to Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
