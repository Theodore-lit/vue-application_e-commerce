<template>
  <div class="flex pt-35">
    <aside class="fixed w-58">
      <input
        type="text"
        id="search"
        placeholder="Rechercher..."
        class="p-1 w-[80%] rounded-md border border-[#80808085] outline-none"
      />
      <div>
        <h2 class="py-2 font-bold text-[#ff1a53] text-lg">
          Product's Category
        </h2>
        <div class="flex flex-col">
          <p
            class="my-2 w-0 cursor-pointer font-bold text-base text-[#5323d4] hover:text-[#b60303]"
            @click="products = [...allProducts]"
          >
            All
          </p>
          <p v-for="category in categories" @click="toFilter(category)"
            class="my-2 w-0 cursor-pointer font-bold text-base text-[#5323d4] hover:text-[#b60303]"
          >
            {{category}}
          </p>
        </div>
      </div>
    </aside>
    <div class="allProducts">
      <ProductCard :products="products" @addNotif="addNotif(Produit ajouté avec sucess,true)" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let allProducts = JSON.parse(localStorage.getItem("products"));
let categories = new Set();
allProducts.forEach(x => categories.add(x.category));
let products = [...allProducts]
function toFilter(ctg) {
  products = allProducts.filter(x => x.category == ctg)
}
import ProductCard from "@/components/ProductCard.vue";
const emit = defineEmits(['addNotif'])
function addNotif(add, type){
    emit('addNotif',add,type)
}
</script>
<style scoped>
/* aside { */
    /* position: fixed; */
/* } */
.allProducts {
  width: 60%;
  display: grid;
  gap: 40px;
  grid-template-columns: auto auto;
  margin: auto;
}
</style>
