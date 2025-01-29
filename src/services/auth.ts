import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // session: {
  //   strategy: "jwt",
  // },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" }, // base64
      },
      async authorize(credentials) {
        const res = await fetch("https://api.cartrac.ru/Main/auth_user/", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user.data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});
