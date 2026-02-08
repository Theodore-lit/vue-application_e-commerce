import CartView from "@/views/CartView.vue";
import HistoryView from "@/views/HistoryView.vue";
import Login from "@/views/LoginView.vue";
import Sign from "@/views/Sign.vue";
import HomeView from "@/views/HomeView.vue";
import ProductDetailsView from "@/views/ProductDetailsView.vue";
import ProductsView from "@/views/ProductsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: { name: "home" } },
  { path: "/home", name: "home", component: HomeView },
  { path: "/:pathMatch(./*)*", name: "not-found", component: NotFound },
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
  {
    path: "/history",
    name: "history",
    component: HistoryView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/sign",
    name: "sign",
    component: Sign,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
