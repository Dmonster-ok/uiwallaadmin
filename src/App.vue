<script setup>
import { ref } from "vue";

let loggedIn = ref(false);

if (localStorage.getItem("token")) {
  loggedIn.value = true;
} else {
  loggedIn.value = false;

  if (window.location.pathname !== "/login") {
    window.location.href = "/login";
  }
}

const handleLogout = () => {
  loggedIn.value = false;
  localStorage.removeItem("token");
  window.location.href = "/login";
};
</script>

<template>
  <div class="flex justify-center gap-4 mt-4">
    <router-link class="text-blue-500" to="/">Home</router-link>
    <router-link class="text-blue-500" to="/login" v-if="!loggedIn"
      >Login</router-link
    >
    <button class="text-blue-500" @click="handleLogout" v-if="loggedIn">
      Logout
    </button>
  </div>

  <router-view></router-view>
</template>
