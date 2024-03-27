<script setup>
import navBar from "../components/navbar.vue";
import { ref, watch } from "vue";
import axios from "axios";

const data = ref([]);
const query = ref("");

function searchComponent() {
    if(query.value != ''){
        axios.get("http://localhost:3000/search?q=" + query.value).then((result) => {
        if (result.status == 200) {
            data.value = result.data
            data.value.forEach(element => {
                element.link = 'http://localhost:3000/component?id=' + element._id + '&preview=true';
            })
        }
    })}
}

</script>

<template>
    <div class="w-full h-full flex flex-col">
        <navBar />
        <div class="h-full flex flex-col gap-2 p-2 overflow-hidden">
            <input type="search" placeholder="search" class="input-fl text-2xl" v-model="query" v-on:keypress.enter="searchComponent">
            <div class="box h-full overflow-y-auto flex-grow-0">
                <!-- list -->
                <div class=" w-full h-fit flex flex-wrap gap-4 p-2 justify-start">
                    <div v-for="component in data" class="rounded-md border p-1 w-[30%]">
                        <div class="flex flex-col">
                            <iframe frameborder="0" class="h-72" scrolling="no" :src="component.link"></iframe>
                            <div class="w-full flex flex-row px-4 py-2 justify-between items-center bg-[#161722]">
                                <div class="flex flex-col justify-center">
                                    <span class="text-4xl">{{ component.title }}</span>
                                    <span class="text-lg">{{ component.category }}</span>
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.box {
    @apply bg-[#0a0b147b] backdrop-blur-xl border-2 border-[#232637] rounded-lg p-2;
}

.input-fl {
    @apply bg-[#232637] align-middle;
    @apply px-4 py-2;
    @apply rounded-md border-2 border-[#2b4e7100];
    @apply focus:outline-none focus:border-[#2b4e71];
    @apply transition;
}
</style>
