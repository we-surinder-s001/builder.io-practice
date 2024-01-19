<template>
  <Head>
    <Title>{{ content?.data?.title }}</Title>
    <Meta name="description" :content="content?.data?.description" />
    <Meta v-if="content?.data?.addNoIndex" name="robots" content="nofollow" />
  </Head>
  <div id="home">
    <div v-if="content || isPreviewing()">
      <RenderContent
        model="page"
        :content="content"
        :api-key="BUILDER_PUBLIC_API_KEY"
      />
    </div>
    <div v-else>Content not Found</div>
  </div>
</template>

<script setup>
import {
  RenderContent,
  getContent,
  isPreviewing,
} from "@builder.io/sdk-vue/vue3";

const runtimeConfig = useRuntimeConfig();

const BUILDER_PUBLIC_API_KEY = runtimeConfig.public.BUILDER_KEY;

const route = useRoute();

// fetch builder content data
const { data: content } = await useAsyncData("builderData", () =>
  getContent({
    model: "page",
    apiKey: BUILDER_PUBLIC_API_KEY,
    userAttributes: {
      urlPath: route.path,
    },
  })
);

console.log(content.value);
</script>
