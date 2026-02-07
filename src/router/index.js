import PayementForm from "@/components/PayementForm.vue";
import CartView from "@/views/CartView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import ProductsView from "@/views/ProductsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: HomeView },

  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },

  {
    path: "/details",
    name: "product-details",
    component: ProductDetailsView,
  },

  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
