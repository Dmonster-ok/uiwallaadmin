<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";

let data = ref([]);
let error = ref(null);
let isLoading = ref(true);


// function deleteComponent(id) {
//     axios.delete('http://localhost:3000/component',{id},{
//         headers: { Authorization: "Bearer " + localStorage.getItem("token") },
//     })
//     console.log( localStorage.getItem("token"),id);
// }
const fetchData = async () => {
    isLoading = true;
    try {
        const response = await axios.get('http://localhost:3000/component');
        localStorage.setItem("Ccount", response.data.length)
        console.log();
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

onBeforeMount(() => {
    fetchData()
})

</script>

<template>
    <div v-for="component in data" class="w-fit rounded-md border my-4 p-1">
        <div class="flex flex-col">
            <iframe frameborder="0" class="h-56" scrolling="no" :src="component.link"></iframe>
            <div class="w-full flex flex-row p-4 justify-between items-center bg-[#232637]">
                <div class="flex flex-row justify-center items-center gap-4">
                    <span class="text-xl">{{ component.title }}</span>
                    <span class="text-base">{{ component.category }}</span>
                </div>
                <div class="flex flex-row items-center">
                    <i class="material-icons text-red-500">favorite</i>
                    <span class=" text-red-100 ml-1">{{ component.likes.length }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
