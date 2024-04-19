<template>
  <transition name="slide">
      <div class="container my-5" v-if="visible">
          <form @submit.prevent="addProduct">
              <div class="mb-3">
                  <label for="productName" class="form-label">Product Name</label>
                  <input type="text" class="form-control" id="productName" v-model="product.name" required>
              </div>
              <div class="mb-3">
                  <label for="productDescription" class="form-label">Description</label>
                  <textarea class="form-control" id="productDescription" v-model="product.description" required></textarea>
              </div>
              <div class="mb-3">
                  <label for="productPrice" class="form-label">Price</label>
                  <input type="number" class="form-control" id="productPrice" v-model="product.price" required>
              </div>
              <button type="submit" class="btn btn-primary m-2">Add Product</button>
              <button type="button" class="btn btn-secondary m-2" @click="cancelAdd">Cancel</button>
          </form>
      </div>
  </transition>
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
          visible: true
      };
  },
  methods: {
      addProduct() {
          this.$store.commit('addProduct', this.product);
          this.$emit('productAdded');
          this.visible = false; 
          setTimeout(() => {
              this.$router.push('/');
          }, 300); 
      },
      cancelAdd() {
          this.visible = false;
          setTimeout(() => {
              this.$router.push('/');
          }, 300);
      }
  }
}
</script>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
