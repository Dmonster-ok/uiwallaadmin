<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";


let data = ref([]);
let error = ref(null);
let isLoading = ref(true);

const fetchUserData = async () => {
    isLoading = true;
    try {
        const response = await axios.get("http://localhost:3000/category");
        data.value = response.data;
    } catch (err) {
        console.error("Error fetching data", err);
        error.value = err;
    } finally {
        isLoading = false;
    }
};

onBeforeMount(() => {
    fetchUserData();
});
</script>

<template>
    <div v-for="cat in data" class="w-full rounded-md border my-2 p-1">
        <p class="text-lg">{{ cat }}</p>
        
    </div>
</template>

<style scoped></style>
