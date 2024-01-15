<template>
  <div id="home">
    <!-- If content is true, render the Builder content using the
    RenderContent component and the "page" model. -->
    <div v-if="content || isPreviewing()">
      <RenderContent :model="route.path" :content="content" :apiKey="apiKey"/>
    </div>
    <!-- If canShowContent is false, show a "Content not Found" message. -->
    <div v-else>Content not Found</div>
  </div>
</template>

<script setup>
import {
  fetchOneEntry,
  RenderContent,
  isPreviewing,
} from "@builder.io/sdk-vue/vue3";
import "@builder.io/sdk-vue/vue3/css";

const route = useRoute();

const BUILDER_PUBLIC_API_KEY = "e5127f7c2fad46389fd321963d98a77f";

const apiKey = ref(BUILDER_PUBLIC_API_KEY);

const content = await fetchOneEntry({
  model: "page",
  apiKey: apiKey.value,
  userAttributes: {
    urlPath: route.path,
  },
});
</script>
