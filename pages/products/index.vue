<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products">
      <ProductsCard :product="p" />
    </div>
    Products Page
  </div>
</template>

<script setup>
definePageMeta({
  layout:'products',
})

const { data:products} = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Products',
  meta: [
    {
      name: 'description',
      content: 'Products page description',
    },
  ],
})
</script>
