import { auth } from "@/auth/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import LogoutForm from "../components/logout/LogoutForm";

const Profile = async () => {
  const authRequest = auth.handleRequest({
    request: null,
    cookies,
  });
  const session = await authRequest.validate();
  if (!session) redirect("/login");
  return (
    <>
      <h1 className="text-slate-300 font-bold text-2xl">Profile</h1>
      <p className="text-slate-400">
        <span className="font-bold">User id: </span>
        {session.user.userId}
      </p>
      <p className="text-slate-400">
        <span className="font-bold">Username:</span> {session.user.username}
      </p>
      <LogoutForm action="/api/logout" />
    </>
  );
};

export default Profile;
