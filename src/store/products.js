import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {id: 1, name: "Carton box", quantity: 1, description: "A box container.", price: 100.01}
        ]
    }
})
