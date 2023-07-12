<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue'
import { useCategoriesStore } from '../stores'

onMounted(() => {
  useCategoriesStore().getCategories()
})
</script>
<template>
  <section class="section bg-warning">
    <div class="container">
      <div class="d-flex overflow-scroll flex-nowrap gap-4 py-2">
        <div v-for="item in useCategoriesStore().categories" :key="item.id">
          <span class="text-nowrap text-white">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
