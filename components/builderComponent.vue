<script setup>
import {REGISTERED_COMPONENTS} from "../init-builder"
import {
  RenderContent,
  getContent,
  isPreviewing,
} from "@builder.io/sdk-vue";

// import "@builder.io/widgets/dist/lib/builder-widgets-async";
// import { accordionConfig } from "@builder.io/widgets/dist/lib/components/Accordion.config";
// import { AccordionComponent } from "@builder.io/widgets/dist/lib/components/Accordion";
// Register your Builder components
// const REGISTERED_COMPONENTS = [
//   {
//     component: ClickMe,
//     // accordionConfig,
//     name: "ABC",
//     // canHaveChildren: true,
//   },
// ];

const {model} = defineProps({
  model: {
    type: String,
    default: "page",
  }
})

const runtimeConfig = useRuntimeConfig();

const BUILDER_PUBLIC_API_KEY = runtimeConfig.public.BUILDER_KEY;

const route = useRoute();

// fetch builder content data
const {data: content} = await useAsyncData("builderData", () =>
    getContent({
      model: model,
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: {
        urlPath: route.path,
      },
    })
);
</script>

<template>
  <Head>
    <Title>{{ content?.data?.title }}</Title>
    <Meta name="description" :content="content?.data?.description"/>
    <Meta v-if="content?.data?.addNoIndex" name="robots" content="nofollow"/>
  </Head>
  <div id="home">
    <div v-if="content || isPreviewing()">
      <RenderContent
          :model="model"
          :content="content"
          :api-key="BUILDER_PUBLIC_API_KEY"
          :customComponents="REGISTERED_COMPONENTS"
      />
    </div>
    <div v-else>Content not Found</div>
  </div>
</template>
