import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { api } from "@/services/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        if (!credentials) {
          return null;
        }

        const values = {
          email: credentials.email,
        };

        const findUser = await api.getUsers();
        console.log(findUser);

        if (!findUser) {
          return null;
        }

        // const isPasswordValid = await compare(
        //   credentials.password,
        //   findUser.password,
        // );
        //
        // if (!isPasswordValid) {
        //   return null;
        // }
        //
        // if (!findUser.verified) {
        //   return null;
        // }
        //
        // return {
        //   id: findUser.id,
        //   email: findUser.email,
        //   name: findUser.firstname,
        //   role: findUser.role,
        // };
      },
    }),
  ],
});
