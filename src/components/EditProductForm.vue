<template>
      <h1 class="mt-5">Edit Product</h1>
    <div v-if="selectedProduct" class="container my-5 vh-100">
        <form @submit.prevent="updateProduct">
            <div class="mb-3">
                <label for="productName" class="form-label">Product Name</label>
                <input type="text" class="form-control" id="productName" v-model="selectedProduct.name" required />
            </div>
            <div class="mb-3">
                <label for="productDescription" class="form-label">Description</label>
                <textarea class="form-control" id="productDescription" v-model="selectedProduct.description"
                    required></textarea>
            </div>
            <div class="mb-3">
                <label for="productPrice" class="form-label">Price</label>
                <input type="number" class="form-control" id="productPrice" v-model="selectedProduct.price" required />
            </div>
            <button type="submit" @click="updateProduct" class="btn btn-primary m-2">
                Save Changes
            </button>
            <button type="button" class="btn btn-secondary m-2" @click="cancelEdit">
                Cancel
            </button>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        selectedProduct() {
            return this.$store.getters.getSelectedProduct;
        }
    },

    methods: {
        updateProduct() {
            this.$store.commit("updateProduct", this.selectedProduct);
            this.$router.push("/");
        },
        cancelEdit() {
            this.$router.push("/");
        },
    },
};
</script>
