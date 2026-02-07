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
            id="all"
          >
            All
          </p>
          <p
            class="my-2 w-0 cursor-pointer font-bold text-base text-[#5323d4] hover:text-[#b60303]"
            id="beauty"
          >
            Beauty
          </p>
          <p
            class="my-2 w-0 cursor-pointer font-bold text-base text-[#5323d4] hover:text-[#b60303]"
            id="furniture"
          >
            Furtinure
          </p>
          <p
            class="my-2 w-0 cursor-pointer font-bold text-base text-[#5323d4] hover:text-[#b60303]"
            id="grocerie"
          >
            Groceries
          </p>
          <p
            class="my-2 w-0 cursor-pointer font-bold text-base text-[#5323d4] hover:text-[#b60303]"
            id="fragrance"
          >
            Fragrances
          </p>
        </div>
      </div>
    </aside>
    <div class="allProducts">
      <ProductCard @addNotif="addNotif" />
    </div>
  </div>
</template>
<script setup>
import ProductCard from "@/components/ProductCard.vue";
const emit = defineEmits(['addNotif'])
function addNotif(){
    emit('addNotif')
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
