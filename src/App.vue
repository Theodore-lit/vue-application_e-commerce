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

let msg = ref('');
let notifAdd = ref();
let messageType = ref();
// let status =ref('')
function notification(message,type) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  notifAdd.value = cart.length;
  msg.value = message;
  messageType.value = type;
  setTimeout(()=> {msg.value ==""}, 3000)
}

</script>

<template>
  <div class="main">
    <MessageView :messageType="messageType" :msg="msg" />
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
