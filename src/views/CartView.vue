<template>
<div v-if="length == 0" class="text-center pt-40 text-3xl text-red-700" >Votre panier est vide...</div>
  <div v-else class="container">
    <div class="cart">
      <CartCard :cart="cart" @toRemove="toRemove" />
    </div>
    <PayementForm :cart="cart" class="form" />
  </div>
</template>
<script setup>
import CartCard from "@/components/CartCard.vue";
import PayementForm from "@/components/PayementForm.vue";
import { computed, ref } from "vue";
let cart = ref(JSON.parse(localStorage.getItem("cart")));
const emit = defineEmits(['remove'])
function toRemove(removeMsg,type,id) {
    emit('remove',removeMsg,type)
  cart.value = cart.value.filter((x) => x.prod.id != id);
  localStorage.setItem("cart", JSON.stringify(cart.value));
}
let length = ref(computed(()=>{
    return cart.value.length
}))
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding-inline: 2%;
  width: 100%;
  padding-top: 10rem;
}

.cart {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.form {
  width: 35%;
  margin: auto;
  margin-block: 0px;
}
</style>
