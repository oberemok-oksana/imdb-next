"use client";
import Link from "next/link";
import SignInForm from "@/app/components/signinForm/SignInForm";

const LogIn = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl text-slate-400">Login</h1>
      <SignInForm action="/api/login" />

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
