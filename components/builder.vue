<template>
  <div id="home">
    <div v-if="content || isPreviewing()">
      <!-- <div>
        page title:
        {{ content?.data?.title || "Unpublished" }}
      </div> -->
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
</script>

<style scoped></style>
