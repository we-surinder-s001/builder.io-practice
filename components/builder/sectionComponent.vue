<script setup>
import {
  RenderContent,
  fetchOneEntry,
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
const content = await fetchOneEntry({
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
        :model="model"
        :content="content"
        :api-key="BUILDER_PUBLIC_API_KEY"
    />
  </div>
  <div v-else>Content not Found</div>
</template>
