import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "@auth/core/providers/credentials";

function findUser(email, password) {
  if (typeof localStorage === "undefined") return null;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  return users.find((u) => u.email === email && u.password === password) || null;
}

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
        console.log("尝试登录的用户:", credentials);

        const user = findUser(credentials.email, credentials.password);
        
        console.log("找到的用户:", user);

        if (!user) {
          console.error("登录失败，未找到用户！");
          return null;
        }

        return {
          id: user.email,
          email: user.email,
          accessToken: user.accessToken,
        };
      }
    })
  ]
});
