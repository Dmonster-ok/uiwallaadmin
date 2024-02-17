<script setup>
import { ref,onBeforeMount } from "vue";
import axios from "axios";

let data = ref([]);
let componentsCount = ref(0);
let error = ref(null);
let isLoading = ref(true);

const fetchData = async () =>{
    isLoading = true;
    try {
        const response = await axios.get('http://localhost:3000/component');
        data.value = response.data;
        console.log("hi");
    } catch (err) {
        console.error("Error fetching data",err);
        error.value = err
    }finally{
        isLoading = false;
    }
}

onBeforeMount(() => {
    fetchData()
})

</script>

<template>
    <div v-for="n in data" class="w-full border">
        {{ n.title }}
    </div>
        
</template>

<style scoped></style>
