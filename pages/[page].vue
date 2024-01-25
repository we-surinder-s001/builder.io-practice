<template>
  <div>
    <BuilderComponent model="page"/>
    <BuilderSectionComponent v-for="section in sections" :key="section.id" :model="section.data.model"/>
  </div>
</template>

<script lang="ts" setup>
import {fetchEntries} from "@builder.io/sdk-vue";

const runtimeConfig = useRuntimeConfig();
const BUILDER_PUBLIC_API_KEY = runtimeConfig.public.BUILDER_KEY;

const sections: any = await fetchEntries({
  model: 'sections',
  apiKey: BUILDER_PUBLIC_API_KEY,
  sort: {
    createdDate: 1
  },
  noTraverse: false,
  includeRefs: false
})
</script>
