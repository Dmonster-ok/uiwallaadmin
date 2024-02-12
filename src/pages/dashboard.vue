<script setup>
import navBar from "../components/navbar.vue";
import Componenentlist from "../components/components.vue";
import Userlist from "../components/users.vue";
import { ref } from "vue";

let Ucount = ref(0);
let Ccount = ref(0);

if (!localStorage.getItem("token")) {
  window.location.href = "/";
}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <navBar />
    <div class="h-full flex flex-col gap-2 p-2">
      <div class="flex-grow-0 flex-none flex gap-2">
        <div class="card w-1/4 flex flex-col">
          <div class="card-title flex justify-between items-center">
            <p>Users</p>
          </div>
          <div class="h-full flex flex-col gap-4 justify-center items-center text-2xl tracking-wider">
            Total Users
            <div class="text-6xl text-[#5d6591]">
              {{ Ucount }}
            </div>
          </div>
        </div>
        <div class="card w-1/4 flex flex-col">
          <div class="card-title flex justify-between items-center">
            <p>Components</p>
          </div>
          <div class="h-full flex flex-col gap-4 justify-center items-center text-2xl tracking-wider">
            Total Components
            <div class="text-6xl text-[#5d6591]">
              {{ Ccount }}
            </div>
          </div>
        </div>
        <div class="card w-2/4 flex flex-col">
          <p class="card-title">Registered Users</p>
          <div class=" h-full mt-1 overflow-y-scroll p-1 ">
            <Userlist />
          </div>
        </div>
      </div>
      <div class="flex-none flex gap-2">
        <div class="card w-1/5 flex flex-col">
          <div class="card-title flex justify-between items-center">
            <p>List of Category</p>
          </div>
          <div class="h-full mt-1 overflow-y-scroll p-1 ">
          </div>
        </div>
        <div class="card w-4/5 flex flex-col">
          <p class="card-title">List of Components</p>
          <div class=" h-full mt-1 overflow-y-scroll p-1 ">
            <Componenentlist />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
