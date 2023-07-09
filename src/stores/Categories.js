import { defineStore } from 'pinia'
import Api from '../plugins/index.js'

export const useCategoriesStore = defineStore("Categori",  {
  state: () => ({
    categories: [],
  }),
  getters: {
  },
  actions: {
    // get  all products
    async getCategories() {
      await Api.get('/products/categories').then((res) => {
        this.categories = res.data;
      });
    },
    },
});
