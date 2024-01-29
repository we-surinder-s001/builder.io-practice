<script setup>
import {REGISTERED_COMPONENTS} from "../../init-builder"
import {
  RenderContent,
  isPreviewing,
  fetchEntries,
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
const content = await fetchEntries({
  model: model,
  apiKey: BUILDER_PUBLIC_API_KEY,
  userAttributes: {
    urlPath: '/' + route.params.slug,
  },
  options: {enrich: true}
})
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
          v-for="builder in content"
          :key="builder.id"
          :model="model"
          :content="builder"
          :api-key="BUILDER_PUBLIC_API_KEY"
      />
    </div>
    <div v-else>Content not Found</div>
  </div>
</template>
