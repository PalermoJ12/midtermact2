<template>
    <section>
      <div class="container py-5 position-relative">
        <h2 class="text-center mb-4">📝 Product List</h2> 
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10 d-flex justify-content-end"> 
            <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Add a Product.">➕</button>
          </div>
        </div>
        <div class="row justify-content-center mb-3">
          <div class="col-md-12 col-xl-10">
            <div class="card shadow-0 border rounded-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 d-flex align-items-center justify-content-center">
                    <div class="bg-image hover-zoom ripple rounded ripple-surface" style="font-size: 100px;">
                      📦
                      <a href="#!">
                        <div class="hover-overlay">
                          <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-6">
                    <!-- Product name -->
                    <ul class="product-list">
                      <li v-for="product in products" :key="product.id">
                        <span style="font-size: 25px;">{{ product.name }}</span>     
                      </li>
                    </ul>
                    <hr>
                    <div class="mt-3 mb-0 text-muted small">
                      <div class="input-group smaller-container">
                        <div class="input-group-prepend">
                          <!-- Product Quantity -->
                          <div class="input-group-text" id="btnGroupAddon2">  
                            <li v-for="product in products" :key="product.id">
                              <span>QTY: {{ product.quantity }}</span>     
                            </li>
                          </div>                       
                        </div>
                        <div class="input-group-append">
                          <ul class="product-list">                          
                          </ul>
                        </div>
                      </div>                   
                    </div>
                    <hr>
                    <!-- Product Description -->
                    <ul class="product-list">
                      <li v-for="product in products" :key="product.id">
                        <span>{{ product.description }}</span>     
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div class="d-flex flex-row align-items-center mb-1">
                      <h4 class="mb-1 me-1">
                        <!-- Product Price -->
                        <ul class="product-list">
                          <li v-for="product in products" :key="product.id">
                            <span style="font-size: 35px;">₱{{ product.price }}</span>     
                          </li> 
                        </ul>
                      </h4>                            
                    </div>
                    <div class="d-flex flex-column mt-4">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm" type="button">Update</button>
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-danger btn-sm mt-2" type="button">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products; 
      }
    }
  }
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
  </style>
  