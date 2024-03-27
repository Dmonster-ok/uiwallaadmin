<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

let data = ref([]);
let error = ref(null);
let isLoading = ref(true);


const deleteComponent = async (id) => {
    try {
        await axios.get("http://localhost:3000/delete-component?id=" + id, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        });
        location.reload(true);
    } catch (err) {
        console.error("Error deleting component", err);
        error.value = err;
    }
}

const fetchData = async () => {
    isLoading = true;
    try {
        const response = await axios.get('http://localhost:3000/component');
        data.value = response.data.data;
        localStorage.setItem("Ccount", response.data.data.length)
        data.value.forEach(element => {
            element.link = 'http://localhost:3000/component?id=' + element._id + '&preview=true';
        })
    } catch (err) {
        console.error("Error fetching data", err);
        error.value = err
    } finally {
        isLoading = false;
    }
}

const updateComponent = async (id) => {
    console.log(id);
    window.location.href = '/update?id=' + id;
}


onBeforeMount(() => {
    fetchData()
})

</script>

<template>
    <div class="h-full mt-1 overflow-y-scroll p-2 flex flex-wrap gap-4 justify-center">
        <div v-for="component in data" class="w-fit h-fit rounded-md border p-1">
            <div class="flex flex-col gap-y-5">
                <Menu as="div" class="relative inline-block text-left">
                    <MenuButton class="material-icons absolute right-0">more_vert</MenuButton>
                    <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="menu-items absolute">
                        <div>
                            <MenuItem class="menu-item hover:text-red-600 hover:transition" v-slot="{ active }">
                                <button class="hover:text-red-600 hover:transition" @click="updateComponent(component._id)">
                                    Update
                                </button>
                            </MenuItem>
                            <MenuItem class="menu-item hover:text-red-600 hover:transition" v-slot="{ active }">
                                <button class="hover:text-red-600 hover:transition" @click="deleteComponent(component._id)">
                                    Delete
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
                <iframe frameborder="0" class="w-full h-56" scrolling="no" :src="component.link"></iframe>
                <div class="w-full flex flex-row px-4 py-2 justify-between items-center bg-[#161722]">
                    <div class="flex flex-col justify-center">
                        <span class="text-2xl">{{ component.title }}</span>
                        <span class="text-sm">{{ component.category }}</span>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <div class="flex flex-row items-center">
                            <i class="material-icons text-red-500">favorite</i>
                            <span class=" text-red-100 ml-1">{{ component.likes.length }}</span>
                        </div>
                        <a :href="component.link" target="_blank" class="material-icons">open_in_new</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.menu-items {
  @apply absolute origin-top-right right-6 w-max bg-[#16192ca9] backdrop-blur rounded-md z-10 border border-[#232637];
}

.menu-item {
  @apply block px-2 py-1 pl-10 w-full text-right text-base font-thin tracking-wide;
  @apply active:bg-[#232637] hover:bg-[#23263741] hover:transition;
}
</style>
