<template>
    <div>Message</div>
  <div :class="props.messageType ? 'text-[green]': 'text-[red]'" >{{ props.msg }}</div>
</template>
<script setup>
const props = defineProps({
  msg: String,
  messageType: Boolean,
})
// import { ref, watch } from "vue";
// let add = ref("");
// let remove = ref("");
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let lenght = cart.lenght;
// watch(lenght, (newLengt, oldLenght) => {
  // if (newLengt > oldLenght) {
    // add.value = "Produit ajouté avec sucess";
    // console.log(add.value);
// }
// if (newLengt < oldLenght) {
    // remove.value = "Produit supprmié avec sucess";
    // console.log(remove.value);
  // }
// });
</script>
<style scoped></style>
