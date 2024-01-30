<script setup>
import { ref } from "vue";

let pagetitle = ref('Dashboard')
</script>

<template>
  <div
    class="w-full bg-gradient-to-b from-black from-20% p-4 flex justify-between items-center px-14 ">
    <div class="w-fit h-fit">
      <img class="w-32" src="/logofull.svg" alt="">
    </div>

    <div class="font-medium text-2xl tracking-widest">
      {{ pagetitle }}
    </div>

    <div class="menu relative">
      <div>
        <button class="relative" id="menu-button" aria-expanded="false" aria-haspopup="true">
          <i class="material-icons text-4xl">menu</i>
        </button>
      </div>

      <div class="menu-items" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <a class="menu-item" href="/dashboard" tabindex="-1" role="menuitem">Dashboard</a>
        <a class="menu-item" href="/create" tabindex="-1" role="menuitem">Create</a>
        <button class="menu-item hover:text-red-600 hover:transition" tabindex="-1" role="menuitem">Logout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.menu-items{
  @apply absolute origin-top-right right-0 w-max bg-[#16192ca9] backdrop-blur rounded-md z-10 border border-[#232637];
}
.menu-item{
  @apply block px-5 py-2 pl-20 w-full text-right text-xl font-thin tracking-wide;
  @apply active:bg-[#232637] hover:bg-[#23263741] hover:transition;
}
</style>