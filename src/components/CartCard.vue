<style scoped></style>
<template>
  <div v-for="product in props.cart" :key="product.prod.id" class="product">
    <div class="productImg"><img :src="product.prod.thumbnail" alt="" /></div>
    <div class="productInfo">
      <h3 class="text-2xl text-[#2e0897]">{{ product.prod.title }}</h3>
      <p class="price">
        <span class="font-bold text-gray-600">Price:</span> ${{
          product.prod.price
        }}
      </p>
      <p>
        <span class="font-bold text-gray-600">Quantity:</span>
        <button @click="product.quantity--">-</button> {{ product.quantity }}
        <button @click="product.quantity++">+</button>
      </p>
      <p class="total">
        Total: ${{ Number(product.prod.price) * Number(product.quantity) }}
      </p>
      <button class="supp mt-2" @click="toRemove('Produit supprmié avec sucess',false,product.prod.id)">
        Supprimer
      </button>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref, registerRuntimeCompiler } from "vue";
const props = defineProps({
    cart: Array,
})
const emit = defineEmits(['toRemove'])

function toRemove(removeMsg,type,id){
    emit('toRemove',removeMsg,type,id)
}
</script>
<style scoped>
.productImg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.productImg {
  width: 20%;
  background-color: #3802caa1;
}

.productInfo {
  width: 80%;
  background-color: whitesmoke;
  padding-inline: 2%;
  align-content: center;
  line-height: 2;
}

.total {
  position: absolute;
  top: 40%;
  right: 5%;
  color: red;
  font-weight: 500;
}
.product {
  position: relative;
  display: flex;
  /* justify-content: center; */
  height: 25%;
  width: 100%;
}

/* CSS */
.supp {
  background: linear-gradient(to bottom right, #f52c2c, #fa7f33);
  border: 0;
  border-radius: 12px;
  color: #fcf7f7;
  cursor: pointer;
  display: inline-block;
  font-family:
    -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.8;
  outline: transparent;
  padding: 0 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}

.supp:not([disabled]):focus {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}

.supp:not([disabled]):hover {
  box-shadow:
    0 0 0.25rem rgba(0, 0, 0, 0.5),
    -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
    0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
}
</style>
