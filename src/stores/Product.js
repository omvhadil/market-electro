import { defineStore } from 'pinia'
import Api from '../plugins/index.js'

export const useProductStore = defineStore("Product",  {
  state: () => ({
    Products: [],
    loading: false,
  }),
  getters: {
    statusSearch() {
        this.Products.length > 0 ? true : false;
    }
  },
  actions: {
    // get  all products
    async getProducts() {
        this.loading = true;
      await Api.get('/products').then((res) => {
        this.Products = res.data.products;
        this.loading = false;
      });
    },

    // search products
    async searchProducts(search) {
        this.loading = true;
        await Api.get(`/products/search?q=${search}`).then((res) => {
            this.Products = res.data.products;
            this.loading = false;
        });
    }

    },
});
