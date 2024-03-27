<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useRoute } from 'vue-router';
import { ref } from "vue";

const route = useRoute();
let pagetitle = ref(route.name)

function logoutAdmin() {
  localStorage.removeItem("token");
  window.location = "/"
}

</script>

<template>
  <div class="w-full bg-gradient-to-b from-black from-20% p-4 flex justify-between items-center px-14 ">
    <div class="w-fit h-fit">
      <img class="w-32" src="/logofull.svg" alt="">
    </div>

    <div class="font-medium text-2xl text-[#ffac30] tracking-widest">
      {{ pagetitle }}
    </div>

    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton>
          <i class="material-icons text-4xl text-[#ffac30] hover:transition">menu</i>
        </MenuButton>
      </div>
      
      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems class="menu-items">
          <div>
            <MenuItem class="menu-item" v-slot="{ active }">
            <a href="/dashboard" class="active:text-[#5aadff]">Dashboard</a>
            </MenuItem>
            <MenuItem class="menu-item" v-slot="{ active }">
            <a href="/create" class="active:text-[#5aadff]">Create</a>
            </MenuItem>
            <MenuItem class="menu-item" v-slot="{ active }">
            <button class="hover:text-red-600 hover:transition" @click="logoutAdmin">
              Logout
            </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<style scoped>
.menu-items {
  @apply absolute origin-top-right right-0 w-max bg-[#16192ca9] backdrop-blur rounded-md z-10 border border-[#232637];
}

.menu-item {
  @apply block px-5 py-2 pl-20 w-full text-right text-xl font-thin tracking-wide;
  @apply active:bg-[#232637] hover:bg-[#23263741] hover:transition;
}
</style>