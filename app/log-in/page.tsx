"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { notify, notifyError } from "../lib/notify";
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
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-slate-400">Login</h1>
      <form
        className="flex flex-col gap-4 w-80 mt-4 border-2 border-slate-400 py-6 px-6 rounded bg-slate-600"
        onSubmit={handleSubmit((data) =>
          handleLogIn(data.email, data.password)
        )}
      >
        <input
          className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "It should be a valid email address",
            },
          })}
          placeholder="Your email"
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <input
          className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
          {...register("password", {
            required: "This field is required",
            minLength: { value: 8, message: "Min length is 8" },
          })}
          placeholder="Your password"
        />
        <p className="text-red-500">{errors.password?.message}</p>

        <input
          className="p-2 bg-transparent font-semibold cursor-pointer rounded tracking-wide text-slate-400 uppercase border-2 border-slate-400 hover:border-slate-300 hover:transition active:border-slate-200 active:text-slate-300"
          type="submit"
        />
      </form>
      <div className="my-3">
        <p className="text-slate-400">You still don&apos;t have an account?</p>
        <p className="text-slate-400">
          <Link
            href="/sign-up"
            className="font-semibold text-slate-500 hover:text-slate-300 hover:transition"
          >
            Click here to sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
