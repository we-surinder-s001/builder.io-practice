<script setup>
import {
  RenderContent,
  fetchEntries,
  isPreviewing,
} from "@builder.io/sdk-vue";

const {model} = defineProps({
  model: {
    type: String,
    default: "section",
    required: true,
  }
})

const runtimeConfig = useRuntimeConfig();

const BUILDER_PUBLIC_API_KEY = runtimeConfig.public.BUILDER_KEY;

const route = useRoute();

// fetch builder content data
const content = await fetchEntries({
  model: model,
  apiKey: BUILDER_PUBLIC_API_KEY,
  userAttributes: {
    urlPath: route.path,
  },
  options: {enrich: true}
})
</script>

<template>
  <div v-if="content || isPreviewing()">
    <RenderContent
        v-for="section in content"
        :key="section.id"
        :model="model"
        :content="section"
        :api-key="BUILDER_PUBLIC_API_KEY"
    />
  </div>
</template>
