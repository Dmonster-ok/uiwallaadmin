<script setup>
import { ref } from "vue";
let flag = false;
let error;
if (flag) {
  error = ref('Invalid Username or Password!!');
} else {
  error = ref('Welcome to UIWalla')
}
</script>

<template>
  <div class="w-screen h-screen  bg-transparent flex items-center justify-center">
    <div class="login-card flex flex-row items-center gap-5 backdrop-blur">
      <div class="login-img w-96 h-96 rounded-lg"></div>
      <div class="buttons flex flex-col gap-8 ml-5">
        <div class="inputs flex flex-col gap-4">
          <div class="w-full h-auto flex flex-col">
            <input class="input-fl" type="text" id="User" placeholder="Admin ID">
          </div>
          <div class="w-full h-auto flex flex-col mt-2">
            <input class="input-fl" type="password" id="Pass" placeholder="Password">
          </div>
          <div class="pl-2">{{ error }}</div>
        </div>
        <button class="btn-secondary">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  @apply w-max h-max;
  @apply bg-[#0a0b14a9];
  @apply rounded-lg;
  @apply p-8;
  @apply border-2 border-[#232637];
}

.input-fl {
  @apply bg-[#232637];
  @apply w-72;
  @apply px-4 py-2;
  @apply align-middle;
  @apply rounded-md border-2 border-[#2b4e7100];
  @apply focus:outline-none focus:border-[#2b4e71];
  @apply transition;
}

.login-img {
  background-image: url(/login-card.svg);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>