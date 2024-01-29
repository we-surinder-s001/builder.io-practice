// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@builder.io/sdk-vue/nuxt'],
    runtimeConfig: {
        public: {
            BUILDER_KEY: process.env.NUXT_BUILDER_KEY,
        },
    },
    css: ['~/main.css'],
});
