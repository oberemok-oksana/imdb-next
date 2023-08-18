import Link from "next/link";

// import { notify, notifyError } from "../lib/notify";
// import { useRouter } from "next/navigation";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import { Database } from "@/lib/database.types";
import Form from "../components/signupForm/Form";
import { auth } from "@/auth/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });
  const session = await authRequest.validate();
  if (session) redirect("/");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-slate-400">Sign Up</h1>
      <Form action="/api/signup" />
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
