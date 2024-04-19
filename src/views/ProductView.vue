<template>
  <div class="">
    <h1 class="mt-5">Add New Product</h1>
    <product-form></product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";

export default {
  components: {
    ProductForm,
  },
};
</script>
