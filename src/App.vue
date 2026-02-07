<script setup>
import { RouterView } from "vue-router";
import NavigationView from "./views/NavigationView.vue";
import { onMounted } from "vue";

let products = [];
async function loader() {
  const response = await fetch("https://dummyjson.com/products");

  const data = await response.json();
  products = [...data.products];
  localStorage.setItem("products", JSON.stringify(products));
}
onMounted(() => {
  loader();
});
</script>

<template>
  <div class="main">
    <div class="nav">
      <NavigationView />
    </div>
    <div class="container">
      <RouterView  />
    </div>
  </div>
</template>

<style scoped>
.main {
  height: auto;
  /* width: 100vw; */
  /* min-height: 100vh; */
  /* background-color: rgb(226 232 240); */
}

.nav {
  width: 100vw;
  /* z-index: 3; */
}

.container {
  margin: auto;
  /* padding-top: 5rem; */
}
</style>
