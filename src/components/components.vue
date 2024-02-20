<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";

let data = ref([]);
let componentsCount = ref(0);
let error = ref(null);
let isLoading = ref(true);

const fetchData = async () => {
    isLoading = true;
    try {
        const response = await axios.get('http://localhost:3000/component');
        data.value = response.data;
        data.value.forEach(element =>{
            element.link = 'http://localhost:3000/component?id='+element._id+'&preview=true';
        })
        console.log(data.value);
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
    <div v-for="component in data" class="w-full rounded-md border my-4 p-1">
        <div class="flex flex-row">
            <iframe frameborder="0" class="w-1/3 border h-56"  :src="component.link"></iframe>
            <div class="pl-9 w-full flex flex-col p-4 gap-y-2">
                <div class="flex flex-row">
                    <span class="text-2xl">{{ component.title }}</span>
                    <span class="ml-5 text-base">{{ component.category }}</span>
                </div>
                <div class="flex flex-row ">
                    <i class="material-icons text-red-500">favorite</i>
                    <span class=" text-red-100">{{ component.likes.length }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
