// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import CrudMainView from "../views/CrudMainView.vue";
import ProductView from "../views/ProductView.vue";
import EditProductForm from "../components/EditProductForm.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: CrudMainView,
  },
  {
    path: "/add-product",
    name: "AddProduct",
    component: ProductView,
  },
  {
    path: "/update-product",
    name: "UpdateProduct",
    component: EditProductForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
