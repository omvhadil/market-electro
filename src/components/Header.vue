<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from 'vue'
import { useCategoriesStore, useProductStore } from '../stores'

const valueSearch = ref('')

const search = () => {
  useProductStore()
    .searchProducts(valueSearch.value)
    .then(() => {
      valueSearch.value = ''
    })
}

onMounted(() => {
  useCategoriesStore().getCategories()
})
</script>
<template>
  <div class="container-fluid p-0 position-fixed top-0 z-3">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">electro<span class="text-primary fs-3">.</span></span>
        <div class="d-flex gap-4">
          <!-- icon search -->
          <div data-bs-toggle="modal" data-bs-target="#exampleModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              ></path>
            </svg>
          </div>
          <!-- icon chat -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M14.45 19L12 22.5L9.55 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H14.45ZM13.409 17H20V5H4V17H10.591L12 19.012L13.409 17Z"
              ></path>
            </svg>
          </div>
          <!-- icon notification -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
              ></path>
            </svg>
          </div>
          <!-- icon user  -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid bg-primary text-white">
      <div class="d-flex overflow-scroll flex-nowrap gap-4 py-2">
        <div v-for="item in useCategoriesStore().categories" :key="item.id">
          <span class="text-nowrap">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-2">
        <form @submit.prevent="search()">
          <div class="d-flex gap-2">
            <input
              class="form-control border-0"
              v-model="valueSearch"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <button class="btn btn-primary" type="submit" data-bs-dismiss="modal">Cari</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
