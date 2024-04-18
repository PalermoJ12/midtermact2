import { createStore } from 'vuex'

export default createStore({
  state: {
    products: JSON.parse(localStorage.getItem('products')) || [
      { id: 1, name: "Carton box", quantity: 1, description: "A box container.", price: 100.01 }
    ]
  },
  mutations: {
    addProduct(state, product) {
      product.id = state.products.length + 1;
      state.products.push({...product, quantity: 1});
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    deleteProduct(state, productId) {
      state.products = state.products.filter(product => product.id !== productId);
      localStorage.setItem('products', JSON.stringify(state.products));
    }
  }
});
