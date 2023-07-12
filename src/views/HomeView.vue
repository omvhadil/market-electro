<!-- eslint-disable no-undef -->
<script setup>
import { watchEffect } from 'vue'
import Banner from '../components/Banner.vue'
import { useProductStore } from '../stores'
import StarRating from 'vue-star-rating'
import Header from '../components/Header.vue'
import Category from '../components/Category.vue'

const product = useProductStore()

watchEffect(() => {
  useProductStore().getProducts()
})
</script>

<template>
  <Header />

  <div class="padtop">
    <Category />
    <Banner />
    <section class="section container mt-4">
      <div v-if="product.loading" class="d-flex justify-content-center align-items-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div v-else class="row gy-3 gy-lg-2">
        <div v-for="item in product.Products" :key="item.id" class="col-6 col-lg-2 p-lg-2">
          <div class="card overflow-hidden shadow-sm">
            <div
              class="bg-white overflow-hidden d-flex align-items-center justify-content-center"
              style="height: 150px"
            >
              <img :src="item.thumbnail" class="img-fluid" alt="..." />
            </div>
            <div class="card-body">
              <p class="title text-truncate mb-0">{{ item.title }}</p>
              <p class="description text-small text-truncate mb-0">{{ item.description }}</p>
              <h5 class="text-dark mb-0">${{ item.price }}</h5>
              <span class="text-small text-secondary">Probolinggo</span>
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
  padding-top: 3.5rem;
}
</style>
