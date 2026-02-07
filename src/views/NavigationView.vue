<template>
  <div class="bar">
    <h2 class="text-2xl font-extrabold leading-relaxed text-[#5323d4]">Lit'shop</h2>
    <div class="menu">
      <RouterLink class="menuLi hover:text-indigo-500 text-blue-500 border-b-2 font-medium border-indigo-400 w-8 pb-2 " :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink class="menuLi hover:text-indigo-500 text-blue-500 border-b-2 font-medium border-indigo-400 w-8 pb-2" :to="{ name: 'products' }"
        >Products</RouterLink
      >
      <RouterLink class="menuLi relative hover:text-indigo-500 font-medium text-blue-500 border-b-2 border-indigo-400 w-8 pb-2" :to="{ name: 'cart' }"
        >Cards <span class="notifAdd">Jesus</span> <svg class="hover:fill-indigo-500" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> </RouterLink
      >
    </div>
    <div class="connexion">
      <RouterLink class="log">Log in</RouterLink>
      <RouterLink class="sign">Sign up</RouterLink>
    </div>
  </div>
</template>
<script setup>
let notifAdd = ref("");
import { ref } from "vue";
import { RouterLink } from "vue-router";
</script>
<style scoped>
.notifAdd {
    background-color: #fd0f1b;
    color: white;
    width: 200px;
    position: absolute;

}
.bar {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-shadow:
    rgba(17, 17, 26, 0.05) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  display: flex;
  justify-content: space-around;
  width: 85%;
  margin: auto;
  height: 7vh;
  align-items: center;
  backdrop-filter: blur(19px);
  border-radius: 30px;
  padding-inline: 2%;
  position: fixed;
  margin-top: 1rem;
  margin-left: 7vw;
  z-index: 6;
}

.menu {
  box-sizing: border-box;
  display: flex;
  width: 30%;
  justify-content: space-between;
  margin: auto;
  height: 50%;
}

.menuLi {
  text-decoration: none;
  font-size: 1.2rem;
  height: 95%;
}

.menuLi svg {
    fill: oklch(70.7% 0.165 254.624);
    transform: translate(230%, -100%);
}

.connexion {
  display: flex;
  justify-content: space-between;
  width: 13%;
}

/* .logo {
  font-size: 1.6rem;
} */

/* CSS */
.sign:hover {
background-image: linear-gradient(92.88deg, #7a0000 9.16%, #7a0000 43.89%, #7a0000 64.72%);
}
.log:hover {
    background-image: linear-gradient(92.88deg, #16014e 9.16%, #16014e 43.89%, #16014e 64.72%);
}
.log {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  align-content: center;
  text-decoration: none;
  border-radius: 30px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 2rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s ease;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.sign {
    background-image: linear-gradient(92.88deg, #ff1a53 9.16%, #fd1e1e 43.89%, #fd0f1b 64.72%);
  align-content: center;
  text-decoration: none;
  border-radius: 30px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex-shrink: 0;
  font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 2rem;
  padding: 0 1.2rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all .5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

/* .button-36:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: .1s;
}

@media (min-width: 768px) {
  .button-36 {
    padding: 0 2.6rem;
  }
} */

</style>
