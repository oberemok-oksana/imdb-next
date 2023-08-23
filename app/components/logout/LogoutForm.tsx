"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LogoutForm = ({ action }: { action: string }) => {
  const router = useRouter();
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     username: "",
  //   },
  // });

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
        className="p-2 rounded bg-slate-400 placeholder:text-slate-600 cursor-pointer"
        type="submit"
        value="Sign out"
      />
    </form>
  );
};

export default LogoutForm;
