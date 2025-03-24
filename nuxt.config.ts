// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ["./assets/styles/main.scss"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@sidebase/nuxt-auth',
  ],
  authJs: {
    providers: [
      {
        id: "credentials",
        name: "Credentials",
        type: "credentials",
        authorize: async (credentials) => {
          const storedUser = JSON.parse(localStorage.getItem("registeredUser") || "{}");

          if (
            storedUser.email === credentials.email &&
            storedUser.password === credentials.password
          ) {
            return { id: storedUser.email, name: storedUser.firstName, email: storedUser.email };
          } else {
            throw new Error("Invalid email or password.");
          }
        },
      },
    ],
  },
  runtimeConfig: {
    public: {
      authBaseUrl: 'http://localhost:3000/api/auth',
      authSecret: "your-secret-key",
    },
    authSecret: 'your-secret-key'
  },
  googleFonts: {
    families: {
      Montserrat: [300, 400, 700, 800],
      'Playfair Display': [400, 700],
    },
    display: 'swap',
    preload: true,
  },
  icon: {
    serverBundle: {
      collections: ['my-icon']
    }
  },
})