<script setup>
import navBar from "../components/navbar.vue";
import Componenentlist from "../components/components.vue";
import Userlist from "../components/users.vue";
import Catlist from "../components/categories.vue";
import {ref} from "vue";

let activeTab = ref("Users");
let count = ref(0);

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
          <div class="card-title flex flex-row justify-evenly">
            <div class="tab">Users</div>
            <div class="tab">Components</div>
          </div>
          <div class="h-full flex flex-col gap-4 justify-center items-center text-2xl tracking-wider">
            Total {{ activeTab }}
            <div class="text-6xl text-[#5d6591]">
              {{ count }}
            </div>
          </div>
        </div>
        <div class="card w-1/4">
          <div class="card-title flex justify-between items-center">
            <p>List of Category</p>
            <i class="material-icons mr-5">add</i>
          </div>
          <div class=" h-full mt-1 overflow-y-scroll p-1 ">
            <Catlist />
          </div>
        </div>
        <div class="card w-1/4"></div>
        <div class="card w-1/4"></div>
      </div>
      <div class="flex-none flex gap-2">
        <div class="card w-1/3 flex flex-col">
          <p class="card-title">Registered Users</p>
          <div class=" h-full mt-1 overflow-y-scroll p-1 ">
            <Userlist />
          </div>
        </div>
        <div class="card w-2/3 flex flex-col">
          <p class="card-title">List of Components</p>
          <div class=" h-full mt-1 overflow-y-scroll p-1 ">
            <Componenentlist />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <router-link to="/create" class="text-blue-500">Create Componenent</router-link> -->
</template>

<style scoped>
.tab{
  @apply bg-[#0a0b14] w-40 text-center rounded-md py-2
}
</style>
