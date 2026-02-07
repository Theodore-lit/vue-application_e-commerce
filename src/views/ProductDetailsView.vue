<!-- <template>
  <div class="details">
    <h1>Product's details</h1>
    <div class="productInfo">
        <button @click="$router.back()">Retour</button>
      <div class="flex justify-center w-[80%]">
        <div>
            <div class="productImg "><img :src="currProd.thumbnail" alt="" /></div>
            <div class="flex w-80 justify-between " >
                <img v-for="img in currProd.images" class="w-25 h-25 object-cover " :src="img" alt="">
            </div>
        </div>
        <h3 class="title">{{ currProd.title }}</h3>
        <p class="brand">Brand: {{ currProd.brand }}</p>
        <p class="price">Price: {{ currProd.price }}</p>
      </div>
      <div class="info">
        <div class="more">
          <p>{{ currProd.warrantyInformation }}</p>
          <p>Availability: {{ currProd.availabilityStatus }}</p>
          <p>Discount Percentage: {{ currProd.discountPercentage }}</p>
          <p class="rating">Rating: {{ currProd.rating }}</p>
        </div>
      </div>
      <input type="number" name="" id="" placeholder="Quantity">
      <button
        @click="toAdd(product.id, quantity)"
        class="ml-auto px-5 py-1 bg-indigo-500 text-white rounded-full cursor-pointer hover:bg-indigo-700 transition"
      >
        Ajouter
      </button>
    </div>
  </div>
</template>
<script setup>
let currProd = JSON.parse(localStorage.getItem("currProd"));
</script>
<style scoped>
.productImg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.productImg {
  width: 270px;
}

.info {
  width: 70%;
}

.productInfo {
    border: 1px solid red;
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 5%;
  width: 80%;
  align-items: center;
  margin: auto;
}


.details {
    padding-top: 8rem;
}


button {
    position: absolute;
    left: 10%;
    top: 5%;
}

</style> -->

<template>
  <div class="details pt-32">
    <!-- Retour -->
    <div class="max-w-6xl mx-auto px-6 mb-6">
      <button @click="$router.back()" class="text-indigo-600 hover:underline">
        ← Retour
      </button>
    </div>

    <!-- Card -->
    <div class="max-w-6xl mx-auto p-8 flex gap-10">
      <!-- Images -->
      <div class="w-1/2">
        <div class="flex flex-row-reverse gap-8">
          <div class="bg-indigo-300 p-4">
            <img :src="currProd.thumbnail" class="w-full h-80 object-contain" />
          </div>
          <!-- Gallery -->
          <div class="flex flex-col gap-3 mt-4">
            <img
              v-for="img in currProd.images"
              :key="img"
              :src="img"
              class="w-20 h-20 object-cover rounded-xl border border-indigo-300 cursor-pointer hover:ring-2 hover:ring-indigo-400"
            />
          </div>
        </div>
      </div>

      <!-- Infos -->
      <div class="w-1/2 flex flex-col gap-4">
        <h1 class="text-3xl font-bold text-indigo-800">
          {{ currProd.title }}
        </h1>

        <p class="text-indigo-500">Marque : {{ currProd.brand }}</p>

        <p class="text-3xl font-extrabold text-indigo-700">
          {{ currProd.price }} $
        </p>

        <div class="flex gap-6 text-sm text-gray-600">
          <p>⭐ {{ currProd.rating }}</p>
          <p>{{ currProd.availabilityStatus }}</p>
        </div>

        <div class="text-sm text-gray-500">
          <p>{{ currProd.warrantyInformation }}</p>
          <p>Réduction : {{ currProd.discountPercentage }} %</p>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4 mt-4">
          <input
            type="number"
            min="1"
            v-model="quantity"
            placeholder="Qté"
            class="w-24 px-3 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400"
          />

          <button
            @click="toAdd()"
            class="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col text-xl w-1/2 m-auto bg-gray-100 content-center p-2.5"
  >
    <h2 class="text-[#fd0f1b] border-b-2 w-8">Description</h2>
    <p class="text-center mt-6 mb-6 text-gray-700">
      {{ currProd.description }}
    </p>
  </div>
</template>
<script setup>
import { ref } from "vue";

let currProd = JSON.parse(localStorage.getItem("currProd"));
let products = JSON.parse(localStorage.getItem("products"));
let quantity = ref(1);
function toAdd() {
  let product = {
    prod: currProd,
    quantity: quantity.value,
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.find((x) => x.prod.id == currProd.id)) {
    cart.push(product);    
  } else {
    console.log("Ce produit est déjà present dans votre panier");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
</script>
