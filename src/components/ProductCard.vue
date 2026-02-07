<template>
  <div v-for="product in products" :key="product.id" class="product">
    <div class="productInfo flex flex-col w-2/3 gap-2 rounded-2xl shadow-md hover:shadow-xl transition p-5">

    <h3 class="text-xl text-indigo-800 font-semibold line-clamp-2 w-full">
      {{ product.title }}
    </h3>

    <p class="text-sm text-indigo-500 border-b border-indigo-200 pb-1">
      {{ product.brand }}
    </p>

    <div class="flex items-center justify-between mt-2">
      <p class="text-2xl font-bold text-indigo-700">
        {{ product.price }} $
      </p>

      <p class="text-sm font-semibold text-yellow-500">
        ⭐ {{ product.rating }}
      </p>
    </div>

    <p class="text-sm text-gray-500">
      Garantie : {{ product.warrantyInformation }}
    </p>

    <div class="flex items-center gap-3 mt-3">

      <button
        @click="detail(product.id)"
        class="px-4 py-1 text-sm border border-indigo-300 cursor-pointer text-indigo-300 rounded-full hover:bg-indigo-50 transition"
      >
        Détails
      </button>

      <input
        type="number"
        min="1"
        v-model="quantity"
        placeholder="Qté"
        class="w-20 px-3 border rounded-full focus:outline-none"
      />

      <button
        @click="toAdd(product.id, quantity)"
        class="ml-auto px-5 py-1  bg-green-600 text-white rounded-full cursor-pointer hover:bg-indigo-500 transition"
      >
        Ajouter
      </button>

    </div>
</div>
    <div class="productImg w-1/3 flex items-center justify-center">
    <img
      :src="product.thumbnail"
      alt=""
      class="w-full h-40 object-contain rounded-xl"
    />

  </div>

</div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let products = JSON.parse(localStorage.getItem("products"));
let quantity = ref(1);
function toAdd(id) {
  let product = {
    prod: products.find((x) => x.id == id),
    quantity: quantity.value
  }
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!cart.find((x) => x.prod.id == id)) {
    cart.push(product);
  } else {
    console.log("Ce produit est déjà present dans votre panier");
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

function detail(id) {
  router.push({ name: "product-details" });
  let currProd = JSON.parse(localStorage.getItem("currProd")) || [];
  currProd = products.find((x) => x.id == id);
  localStorage.setItem("currProd", JSON.stringify(currProd));
}

// function rating(number){
//     let stars = '';
//     let n = Math.floor(number)
//     for (let index = 0; index <= n; n++){
//         stars += 'g'
//     }    
//     return stars
// }
</script>
<style scoped>
.productImg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.productImg {
  width: 300px;
  height: 90%;
  transition: all .2s ease;
}

.productImg:hover {
    transform: scale(1.1);
}

.productInfo {
  width: 300px;
  background-color: white;
  padding-inline: 2%;
  padding-block: 1%;
  margin-left: 20px;
  border-radius: 2px;
  height: 210px;
}
.product {
  display: flex;
  position: relative;
  justify-content: center;
  background-color: rgba(107, 152, 224, 0.842);
  height: 250px;
  width: 600px;
  border-radius: 4px;
  align-items: center;
}

.rating {
    position: absolute;
    right: 3%;
    top: 5%;
    height: 30px;
    width: 70px;
    background-color: #fff;
    text-align: center;
    border-radius: 30px;
    align-items: center;
    align-content: center;
}
</style>
