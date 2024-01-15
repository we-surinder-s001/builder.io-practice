<script setup>
const { data } = await useFetch("/api/srData?name=surinder", {
  method: "POST",
  body: {
    age: 21,
  },
});
</script>

<template>
  <h1>About Page</h1>
  <div>{{ data }}</div>
</template>
