import { lucia } from "lucia";
import { nextjs } from "lucia/middleware";
import { betterSqlite3 } from "@lucia-auth/adapter-sqlite";
import db from "@/lib/db";

export const auth = lucia({
  env: "DEV",
  middleware: nextjs(),
  sessionCookie: {
    expires: false,
  },
  adapter: betterSqlite3(db, {
    user: "user",
    key: "user_key",
    session: "user_session",
  }),

  getUserAttributes: (data) => {
    return {
      username: data.username,
    };
  },
});

export type Auth = typeof auth;
