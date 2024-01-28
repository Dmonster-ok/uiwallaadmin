<script setup>
import components from "../components/components.vue";

if (!localStorage.getItem("token")) {
  window.location.href = "/login";
}
</script>

<template>
  <div class="">Dashboard</div>

  <div class="flex justify-center gap-4 mt-4">
    <router-link to="/create" class="text-blue-500"
      >Create Componenent</router-link
    >
  </div>

  <components />
</template>

<style scoped></style>
