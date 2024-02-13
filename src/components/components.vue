<script setup>
import { ref } from "vue";
import axios from "axios";

let items = ref([]);
let error = ref(null);
let isFatching = false;


const fetchApiData = async()=>{
    isFatching = true;
    error = null;
    
    try {
        const response = await axios.get("http://localhost:3000/component");
        items = response.data
    } catch (err) {
        error = err.message;
        console.error("Error fetching data: ",err);
    }finally{
        isFatching = false;
    }
}


</script>

<template>
    <div v-for="n in 100" class="w-full border">
        {{ n }} component
    </div>
</template>

<style scoped></style>
