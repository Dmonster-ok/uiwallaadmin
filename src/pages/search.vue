<script setup>
import navBar from "../components/navbar.vue";
import { ref, watch } from "vue";
import axios from "axios";

const query = ref("");

function searchComponent() {
    axios.get("http://localhost:3000/search?q="+query.value).then((data)=>{
        console.log(data);
    })
}

watch(query, ()=>{
    console.log(query);
});

</script>

<template>
    <div class="w-full h-full flex flex-col">
        <navBar />
        <div class="h-full flex flex-row gap-2 p-1">
            <div class="box w-1/6"></div>
            <div class="flex flex-col gap-2 w-5/6 h-full">
                <input type="search" placeholder="search" class="input-fl h-11" v-model="query" />
                <div class="box h-full"></div>
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
