<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span>📦</span>
          CRUD 
        </a>       
      </div>
    </nav>
    <div class="container">     
      <crud-main></crud-main>
    </div>
  </div>
</template>

<script>
import CrudMain from './components/CrudMain.vue';

export default {
  name: 'App',
  components: {
    "crud-main" : CrudMain
  }
}
</script>

<style>

</style>
