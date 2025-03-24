import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "@auth/core/providers/credentials";

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (typeof window === "undefined") return null;

        const userData = localStorage.getItem("userToken");
        if (!userData) return null;

        const user = JSON.parse(userData);

        if (user.email !== credentials.email || user.password !== credentials.password) {
          return null;
        }

        return {
          id: user.email,
          email: user.email,
          accessToken: user.accessToken,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    }
  }
});
