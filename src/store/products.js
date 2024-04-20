import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: "Carton box",
        quantity: 1,
        description: "A box container.",
        price: 100.01,
      },
    ],
    selectedProduct: null,
  },
  mutations: {
    addProduct(state, product) {
      product.id = state.products.length + 1;
      state.products.push({ ...product, quantity: 1 });
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
    updateProduct(state, updatedProduct) {
      const index = state.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        state.products.splice(index, 1, updatedProduct);
        state.selectedProduct = null; 
      }
    },

    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
  },
  getters: {
    getSelectedProduct(state) {
      return state.selectedProduct;
    },
  },
});
