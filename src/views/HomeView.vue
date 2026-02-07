<template>
  <div class="hero w-screen min-h-screen flex flex-col items-center justify-center gap-8 overflow-hidden">
    
    <h1 class="text-5xl text-white font-bold shadow-[0_35px_60px_-15px_rgb(113, 137, 245)]">
      Bienvenue, faites-vous plaisir
    </h1>

    <p class="text-2xl font-light text-indigo-200  max-w-3xl text-center">
      Des produits soigneusement sélectionnés, une expérience fluide et des achats sans stress.
      Ici, acheter devient un plaisir.
    </p>

    <RouterLink
      class="text-xl rounded-3xl px-6 py-2 shadow-[0_35px_60px_-15px_rgba(113,137,245,0.5)] bg-indigo-100 text-indigo-800 font-medium hover:bg-indigo-200 transition"
      :to="{ name: 'products' }"
    >
      Visitez nos rayons
    </RouterLink>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
</script>

<style scoped>
.hero {
  position: relative;
  background-image: url('../assets/img.png');
  background-size: cover;
  background-position: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}

.hero > * {
  position: relative;
  z-index: 1;
  text-shadow: 0 0 30px rgba(113,137,245,0.8),
               0 0 60px rgba(113,137,245,0.5);
}
</style>
