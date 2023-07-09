<!-- eslint-disable no-undef -->
<script setup>
import { watchEffect } from 'vue'
import Banner from '../components/Banner.vue'
import { useProductStore } from '../stores'
import StarRating from 'vue-star-rating'
import Header from '../components/Header.vue'

const product = useProductStore()

watchEffect(() => {
  useProductStore().getProducts()
})
</script>

<template>
  <Header />

  <div class="padtop">
    <Banner />
    <section class="section container mt-4">
      <div v-if="product.loading" class="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="row gy-3">
        <div v-for="item in product.Products" :key="item.id" class="col-6">
          <div class="card overflow-hidden">
            <div
              class="bg-white overflow-hidden d-flex align-items-center justify-content-center"
              style="height: 150px"
            >
              <img :src="item.thumbnail" class="img-fluid" alt="..." />
            </div>
            <div class="card-body">
              <h6 class="title text-truncate">{{ item.title }}</h6>
              <p class="description text-small text-truncate">{{ item.description }}</p>
              <h6 class="text-primary">${{ item.price }}</h6>
              <StarRating
                :star-size="15"
                :increment="0.1"
                :read-only="true"
                :rating="item.rating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.text-small {
  font-size: 0.8rem;
}
.padtop {
  padding-top: 5.5rem;
}
</style>
