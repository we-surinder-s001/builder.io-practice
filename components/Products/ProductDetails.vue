<script setup>
const { details } = defineProps(["details"]);
</script>

<template>
  <div class="card">
    <div class="flex gap-10">
      <div class="p-7">
        <img :src="details.image" :alt="details.title" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">
          {{ details.title }}
        </h2>
        <p class="text-xl my-7">Price- Rs.{{ details.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pd-2">Product Details</h3>
        <p class="mb-7">{{ details.description }}</p>
        <button class="btn flex items-center">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  max-width: 400px;
}
</style>
