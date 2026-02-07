<script setup>
import { RouterView } from "vue-router";
import NavigationView from "./views/NavigationView.vue";
import { ref, onMounted, computed } from "vue";
import MessageView from "./views/MessageView.vue";

let products = [];
async function loader() {
  const response = await fetch("https://dummyjson.com/products");

  const data = await response.json();
  products = [...data.products];
  localStorage.setItem("products", JSON.stringify(products));
}
onMounted(() => {
  loader();
  // notification();
});


let notifAdd = ref();
function notification() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  notifAdd.value = cart.length;
}
</script>

<template>
  <div class="main">
    <MessageView />
    <div class="nav">
      <NavigationView :notifAdd="notifAdd" />
    </div>
    <div class="container">
      <router-view v-slot="{ Component }">
        <component
        :is="Component"
          @addNotif="notification"
          @remove="notification"
        />
      </router-view>
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
