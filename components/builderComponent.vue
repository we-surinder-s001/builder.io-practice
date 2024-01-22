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
        :customComponents="REGISTERED_COMPONENTS"
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
import ClickMe from "./button/clickMe.vue";
// import "@builder.io/widgets/dist/lib/builder-widgets-async";
// import { accordionConfig } from "@builder.io/widgets/dist/lib/components/Accordion.config";
// import { AccordionComponent } from "@builder.io/widgets/dist/lib/components/Accordion";
// Register your Builder components
const REGISTERED_COMPONENTS = [
  {
    component: ClickMe,
    // accordionConfig,
    name: "ABC",
    // canHaveChildren: true,
  },
];

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
