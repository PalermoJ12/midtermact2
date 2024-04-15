import { createApp } from 'vue'
import App from './App.vue'
import productsStore from './store/products'

createApp(App).use(productsStore).mount('#app')
