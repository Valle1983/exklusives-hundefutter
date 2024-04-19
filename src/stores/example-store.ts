import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedProduct: {
      id: '',
      image: '',
      type: '',
      headline: '',
      text: '',
      description: '',
    },
  }),
  getters: {
    getSelectedProduct(state) {
      return state.selectedProduct;
    },
  },
  actions: {
    setSelectedProduct(product: any) {
      this.selectedProduct = product;
    },
  },
});
