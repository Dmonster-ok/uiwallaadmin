<script setup>
import { ref } from "vue";
import navBar from "../components/navbar.vue";
import Componenentlist from "../components/components.vue";
import Userlist from "../components/users.vue";
import Categorylist from "../components/category.vue";

let Ucount = localStorage.getItem("Ucount");
let Ccount = localStorage.getItem("Ccount");

if (!localStorage.getItem("token")) {
  window.location.href = "/";
}
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <navBar />
    <div class="h-full flex flex-col gap-2 p-1">
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
              <Categorylist />
          </div>
        </div>
        <div class="card w-4/5 flex flex-col">
          <div class="card-title flex items-center justify-between">List of Components 
            <a class="material-icons text-[#ffac30]" href="/search">search</a>
          </div>
          <div class=" h-full mt-1 overflow-y-scroll p-1 flex flex-wrap gap-4 justify-evenly">
            <Componenentlist />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
