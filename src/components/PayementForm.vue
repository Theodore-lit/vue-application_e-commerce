<template>
  <!-- <div class="payementForm"> -->
  <!-- <form @submit.prevent="payment(userData)"> -->
  <!-- <div>
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          v-model="userData.name"
          requeried
        />
      </div>
      <div>
        <label for="num">Numero de carte</label>
        <input
          type="text"
          id="num"
          placeholder="Numero de carte"
          v-model="userData.num"
          required
        />
      </div>
      <div>
        <label for="date">Date d'expiration</label>
        <input type="date" id="date" v-model="userData.date" requeried />
      </div>
      <div>
        <label for="password">Votre CVV</label>
        <input
          type="password"
          id="password"
          placeholder="CVV"
          v-model="userData.password"
          requeried
        />
      </div> -->
  <!-- <button @click="$router.back()">Annuler</button> -->
  <!-- </form> -->

  <!-- </div> -->

  <form @submit.prevent="payment(userData)">
    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">
        Formulaire de paiement
      </h2>
      <p class="mt-1 text-sm/6 text-gray-600">
        Validez votre paiement et vous serez livrer sur le champ.
      </p>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label
            for="first-name"
            class="block text-sm/6 font-medium text-gray-900"
            >First name</label
          >
          <div class="mt-2">
            <input
              id="first-name"
              type="text"
              name="first-name"
              placeholder="ex: John"
              v-model="userData.firstName"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label
            for="last-name"
            class="block text-sm/6 font-medium text-gray-900"
            >Last name</label
          >
          <div class="mt-2">
            <input
              id="last-name"
              type="text"
              name="last-name"
              placeholder="ex: Doe"
              v-model="userData.lastName"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="johnDoe@gmail.com"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="date" class="block text-sm/6 font-medium text-gray-900"
            >Date d'expiration
          </label>
          <div class="mt-2 grid grid-cols-1">
            <input
              type="date"
              id="date"
              v-model="userData.date"
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              requeried
            />

            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            >
              <path
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div class="col-span-full">
          <label for="num" class="block text-sm/6 font-medium text-gray-900"
            >Numero de carte</label
          >
          <div class="mt-2">
            <input
              type="text"
              id="num"
              placeholder="ex: 452369874525"
              v-model="userData.num"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              required
            />
          </div>
        </div>

        <div class="sm:col-span-2 sm:col-start-1">
          <label
            for="password"
            class="block text-sm/6 font-medium text-gray-900"
            >CVV</label
          >
          <div class="mt-2">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="ex: 8546"
              v-model="userData.password"
              requeried
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="region" class="block text-sm/6 font-medium text-gray-900"
            >State / Province</label
          >
          <div class="mt-2">
            <input
              id="region"
              type="text"
              name="region"
              autocomplete="address-level1"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="postal-code"
            class="block text-sm/6 font-medium text-gray-900"
            >ZIP / Postal code</label
          >
          <div class="mt-2">
            <input
              id="postal-code"
              type="text"
              name="postal-code"
              autocomplete="postal-code"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <button
        class="h-10 w-full mt-6 rounded-full bg-[#08960f] px-3 text-2xl text-white outline-none align-middle cursor-pointer"
      >
        Payez ${{ total }}
      </button>
    </div>

    <transition name="fade">
      <div
        class="mt-5 w-full h-10 rounded-md bg-red-100 text-red-600 text-center pt-2"
        v-if="wrong"
      >
        {{ wrong }}
      </div>
    </transition>
  </form>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, computed } from "vue";
const userData = {
  firstName: "",
  lastName: "",
  num: "",
  date: "",
  password: "",
};
let wrong = ref("");
function payment(data) {
  const now = Date.now();
  const delay = new Date(data.date).getTime() - now;
  if (delay < 0) {
    wrong.value = "Carte invalide";
  } else if (
    /[a-z]/.test(data.num) ||
    /[A-Z]/.test(data.num) ||
    /[!@#$%^&*(),.?":{}|<>]/.test(data.num)
  ) {
    wrong.value = "Numero de compte invalide";
    console.log(data.password.length);
  } else if (data.password.length <= 5) {
    wrong.value = "CVV invalide";
  } else {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    wrong.value = "";
  }
}

const props = defineProps({
  cart: Array,
});
let total = ref();
total.value = computed(() => {
  let tot = 0;
  props.cart.forEach((product) => {
    tot += product.quantity * product.prod.price;
  });
  return tot;
});
</script>
<style scoped></style>
