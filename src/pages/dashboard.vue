<script setup>
import navBar from "../components/navbar.vue";

if (!localStorage.getItem("token")) {
  window.location.href = "/";
}
</script>

<template>
  <navBar />
  <div class="flex justify-center gap-4 mt-4">
    <router-link to="/create" class="text-blue-500">Create Componenent</router-link>
  </div>
</template>

<style scoped></style>
