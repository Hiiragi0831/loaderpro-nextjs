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
        console.log("onSubmit");
        if (!credentials) {
          return null;
        }

        // const values = {
        //   email: credentials.email,
        // };

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
        return {
          id: findUser.id,
          email: findUser.email,
          name: findUser.firstname,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }

      // const findUser = await prisma.user.findFirst({
      //   where: {
      //     email: token.email,
      //   },
      // });
      //
      // if (findUser) {
      //   token.id = String(findUser.id);
      //   token.email = findUser.email;
      //   token.fullName = findUser.fullName;
      //   token.role = findUser.role;
      // }

      return token;
    },
    session({ session, token }) {
      // if (session?.user) {
      //   session.user.id = token.id;
      //   session.user.role = token.role;
      // }

      return session;
    },
  },
});
