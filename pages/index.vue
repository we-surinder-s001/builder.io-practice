<template>
  <div>
    <BuilderComponent v-for="builder in builders" :key="builder.id" :model="builder.data.name"/>
  </div>
</template>

<script lang="ts" setup>
import {fetchEntries} from "@builder.io/sdk-vue";

const runtimeConfig = useRuntimeConfig();
const BUILDER_PUBLIC_API_KEY = runtimeConfig.public.BUILDER_KEY;

const builders: any = await fetchEntries({
  model: 'models',
  apiKey: BUILDER_PUBLIC_API_KEY,
  sort: {
    createdDate: 1
  },
  noTraverse: false,
  includeRefs: false
})
</script>
