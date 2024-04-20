<template>
  <div class="container my-5">
    <form @submit.prevent="addProduct">
      <div class="mb-3">
        <label for="productName" class="form-label">Product Name</label>
        <input type="text" class="form-control" id="productName" v-model="product.name" required>
        <p style="color: red;">{{ errorMessageName }}</p>
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">Description</label>
        <textarea class="form-control" id="productDescription" v-model="product.description" required></textarea>
        <p style="color: red;">{{ errorMessageDescription }}</p>
      </div>
      <div class="mb-3">
        <label for="productPrice" class="form-label">Price</label>
        <input type="number" class="form-control" id="productPrice" v-model="product.price" required>
        <p style="color: red;">{{ errorMessagePrice }}</p>
      </div>
      <button type="submit" class="btn btn-primary m-2" @click="addProduct">Add Product</button>
      <button type="button" class="btn btn-secondary m-2" @click="cancelAdd">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: null
      },
    };
  },
  methods: {
    addProduct() {
      if (this.product.name === "" || this.product.price === null || this.product.description === "") {
        return;

      }

      this.$store.commit('addProduct', this.product);
      this.$router.push('/');
    },
    cancelAdd() {
      this.$router.push('/');
    }
  }
}
</script>