import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "@/services/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const users = await api.getUsers();

        // const response = await fetch("https://api.cartrac.ru/Main/auth_user/");
        // if (!response.ok) return null;
        // return (await response.json()) ?? null;

        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password,
        );
        return user
          ? { id: user.id, name: user.firstname, email: user.email }
          : null;
      },
    }),
  ],
});
