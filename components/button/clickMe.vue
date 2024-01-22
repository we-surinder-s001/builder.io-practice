<template>
  <button @click="clicked">here: {{ click_text }}</button>
  <slot />
</template>

<script setup>
const {click_text} = defineProps(['click_text'])

const clicked = () => {
  console.log(click_text);
};
</script>

<style scoped>
button {
  all: unset;
}
</style>
