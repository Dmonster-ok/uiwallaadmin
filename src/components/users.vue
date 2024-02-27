<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";


let img = ref("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
let photo = ref([img.value, img.value, img.value, img.value]);
let data = ref([]);
let usersCount = ref(0);
let error = ref(null);
let isLoading = ref(true);
let token = ref(localStorage.getItem("token"));

const fetchUserData = async () => {
    isLoading = true;
    try {
        const response = await axios.get("http://localhost:3000/users", {
            headers: { Authorization: "Bearer " + token.value },
        });
        localStorage.setItem("Ucount", response.data.length);
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
    <div v-for="user in data" class="w-full rounded-md border my-2 p-1">
        <div class="flex flex-row gap-5 items-center ml-4">
            <img :src="photo[user.photoId - 1]" class="h-8 w-8 rounded-full" alt="" />
            <div class="">
                <p class="text-lg">{{ user.name }}</p>
                <p class="text-slate-400">{{ user.email }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
