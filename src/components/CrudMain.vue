<template>
  <section>
    <div class="container row d-flex justify-content-center">
      <div class="row d-flex justify-content-center mb-3">
        <div class="d-flex justify-content-end" style="width: 67%">
          <button
            type="button"
            class="btn btn-dark rounded-3 text-light"
            @click="goToAddProductForm()"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Add a Product."
          >
            <span>Add Product</span>
          </button>
        </div>
      </div>
      <div class="col-md-8 p-2 row d-flex justify-content-center">
        <transition-group name="fade" tag="div">
          <div
            class="card border rounded-3 col-md-10 mt-2 w-100 bg-dark text-light"
            v-for="product in products"
            :key="product.id"
          >
            <div class="card-body">
              <ul class="product-list">
                <li>
                  <div class="row">
                    <div
                      class="col-md-6 col-lg-3 col-xl-3 mb-4 mb-lg-0 d-flex justify-content-end align-items-center"
                    >
                      <div
                        class="bg-image hover-zoom ripple rounded ripple-surface"
                        style="font-size: 100px"
                      >
                        <div class="mt-2"><h6>Product Name:</h6></div>
                        <div class="mt-4"><h6>Quantity:</h6></div>
                        <div class="mt-4"><h6>Description:</h6></div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <!-- Product Name -->
                      <h4 class="mt-3">{{ product.name }}</h4>
                      <!-- Product Quantity -->
                      <p class="mt-4">QTY: {{ product.quantity }}</p>
                      <!-- Product Description -->
                      <p class="">{{ product.description }}</p>
                    </div>
                    <div
                      class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"
                    >
                      <!-- Product Price -->
                      <h4>₱{{ product.price }}</h4>
                      <div class="d-flex flex-column mt-4">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-primary btn-sm"
                          type="button"
                        >
                          Update
                        </button>
                        <button
                          @click="deleteProduct(product.id)"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          class="btn btn-danger btn-sm mt-2"
                          type="button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </li>
              </ul>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    goToAddProductForm() {
      this.$router.push("/add-product");
    },
    deleteProduct(productId) {
      if (confirm("Are you sure you want to delete this product?")) {
        // Use Vue's nextTick to ensure the product is removed after the confirm dialog
        this.$nextTick(() => {
          this.$store.commit("deleteProduct", productId);
          this.saveToLocalStorage();
        });
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("products", JSON.stringify(this.products));
    },
  },
};
</script>

<style scoped>
.container-with-margin {
  margin: 30px auto;
  max-height: calc(100vh - 150px);
  border: 1px solid black;
}

.smaller-width {
  width: 60px;
  font-size: 14px;
}

.smaller-container {
  max-width: 110px;
}

.product-list {
  list-style: none;
  padding: 0;
}

.product-list li {
  margin-bottom: 5px;
  font-size: 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
