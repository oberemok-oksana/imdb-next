"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Form = ({ action }: { action: string }) => {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  return (
    <form
      className="  flex flex-col gap-4 w-80 mt-4 border-2 border-slate-400 py-6 px-6 rounded bg-slate-600"
      action={action}
      method="post"
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch(action, {
          method: "POST",
          body: formData,
          redirect: "manual",
          cache: "no-store",
        });

        if (response.status === 0) {
          // redirected
          // when using `redirect: "manual"`, response status 0 is returned
          return router.refresh();
        }
      }}
    >
      <input
        className="p-2 rounded bg-slate-400 placeholder:text-slate-600"
        placeholder="Username"
        {...register("username", {
          required: "This field is required",
          minLength: { value: 2, message: "Min length 2" },
        })}
      />
      <p className="text-red-500">{errors.username?.message}</p>

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
  );
};

export default Form;
