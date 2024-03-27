<script setup>
import { ref, onBeforeMount } from "vue";
import axios from "axios";


let photo = ref(["/pfp/p1.png",
    "/pfp/p2.png",
    "/pfp/p3.png",
    "/pfp/p4.png",
    "/pfp/p5.png",
    "/pfp/p6.png",
    "/pfp/p7.png",
    "/pfp/p8.png"]);
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

const deleteUser = async (email) => {
    try{
        await axios.get("http://localhost:3000/delete-user?email=" + email )
        location.reload(true);
    } catch{
        console.error("Error deleting user", err);
        error.value = err;
    }
    console.log(email);
};

onBeforeMount(() => {
    fetchUserData();
});
</script>

<template>
    <div v-for="user in data" class="w-full rounded-md border my-2 p-1">
        <div class="flex flex-row gap-5 items-center mx-4 justify-between">
           <div class="flex flex-row gap-5 items-center">
             <img :src="photo[user.photoId - 1]" class="h-8 w-8 rounded-full" alt="" />
             <div class="">
                 <p class="text-lg">{{ user.name }}</p>
                 <p class="text-slate-400">{{ user.email }}</p>
             </div>
           </div>
            <button class="material-icons text-xl hover:text-[#ff0000]" @click="deleteUser(user.email)">person_remove</button>
        </div>
    </div>
</template>

<style scoped></style>
