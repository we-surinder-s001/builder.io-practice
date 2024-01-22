<template>
  <button @click="clicked">click me</button>
</template>

<script setup>
const clicked = () => {
  console.log("clicked");
};
</script>

<style scoped></style>
