<script setup>
import { ref } from "vue";
let loggedIn = ref(false);

if (localStorage.getItem("token")) {
  loggedIn.value = true;
} else {
  loggedIn.value = false;
  if (window.location.pathname !== "/") {
    window.location.href = "/";
  }
}

const handleLogout = () => {
  loggedIn.value = false;
  localStorage.removeItem("token");
  window.location.href = "/";
};
</script>

<template>
  <div class="w-dvw h-dvh flex flex-col">
    <div class="flex-auto">
      <router-view></router-view>
    </div>
  </div>
</template>
