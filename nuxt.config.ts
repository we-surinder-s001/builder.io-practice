// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      BUILDER_KEY: process.env.NUXT_BUILDER_KEY,
    },
  },
  build: {
    /**
     * You need to transpile the Builder.io Vue SDK for it to work correctly.
     */
    transpile: ["@builder.io/sdk-vue"],
  },
});
