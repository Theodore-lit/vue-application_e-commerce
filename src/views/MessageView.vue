<template>
    <div>Message</div>
  <div v-if="add">{{ add }}</div>
  <div v-if="remove">{{ remove }}</div>
</template>
<script setup>
import { ref, watch } from "vue";

let add = ref("");
let remove = ref("");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let lenght = cart.lenght;
watch(lenght, (newLengt, oldLenght) => {
  if (newLengt > oldLenght) {
    add.value = "Produit ajouté avec sucess";
    console.log(add.value);
}
if (newLengt < oldLenght) {
    remove.value = "Produit supprmié avec sucess";
    console.log(remove.value);
  }
});
</script>
<style scoped></style>
