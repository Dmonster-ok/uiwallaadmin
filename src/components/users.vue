<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";


let username = ref("username")
let data = ref([]);
let usersCount = ref(0);
let error = ref(null);
let isLoading = ref(true);
let token = ref(localStorage.getItem("token"));
console.log(token.value);


const fetchUserData = async () => {
    isLoading = true;
    try {
        const response = await axios.get('http://localhost:3000/users', {headers: {Authorization: token}});
        data.value = response.data;
        console.log(response);
    } catch (err) {
        console.error("Error fetching data", err);
        error.value = err
    } finally {
        isLoading = false;
    }
}

onBeforeMount(() => {
    fetchUserData()
})


</script>

<template>
    <div v-for="n in 100" class="w-full rounded-md border my-2 p-1">
        <div class="flex flex-row gap-5 items-center">
            <span class="ml-2 w-5">{{ n }}.</span>
            <img class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="">
            <p>username{{ Math.round(n * 3.14) }}</p>
        </div>
    </div>
</template>

<style scoped></style>
