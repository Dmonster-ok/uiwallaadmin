<script setup>
import { ref } from "vue";
import axios from "axios";

let aname = ref('');
let aemail = ref('');
let apass = ref('');
let akey = ref('');


const createUser = async () => {
    try {
        if (aname.value != '' && aemail.value != '' && apass.value != '' && akey.value != '') {
            await axios.post("http://localhost:3000/create", {
                name: aname.value,
                email: aemail.value,
                password:apass.value,
                key: akey.value,
            });
            alert("Admin:"+ aname.value +" Created Successfully");
        } else {
            alert("Invalid Inputs");
        }
    } catch (err) {
        console.error("Error creating user", err);
    }
};

const closeModal = () => {
    window.location.href = "/dashboard";
};



</script>

<template>
    <div class="w-full h-full bg-stone-950/50 flex justify-center items-center">
        <div class="bg-black bg-[#0a0b14a9] rounded-lg p-8 border-2 border-[#232637] flex flex-col gap-5">
            <div class="flex flex-row justify-between">
                <p class="text-xl text-[#ffac30] font-bold">Create Admin</p>
                <button class="material-icons text-red-700" @click="closeModal">close</button>
            </div>
            <div class="flex flex-col gap-5">
                <input v-model="aname" type="text" name="Admin-name" id="aname" class="input-fl w-full"
                    placeholder="Admin Name">
                <input v-model="aemail" type="email" name="Admin-email" id="aemail" class="input-fl w-full"
                    placeholder="Admin Email">
                <input v-model="apass" type="text" name="Admin-pass" id="apass" class="input-fl w-full"
                    placeholder="Admin Password">
            </div>
            <div class="flex flex-row gap-5 pt-5">
                <input v-model="akey" type="password" name="skey" id="skey" class="input-fl w-1/2"
                    placeholder="Security key">
                <button class="btn-create w-1/2" @click="createUser">Create</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.input-fl {
    @apply bg-[#232637];
    @apply px-4 py-2;
    @apply align-middle;
    @apply rounded-md border-2 border-[#2b4e7100];
    @apply focus:outline-none focus:border-[#2b4e71];
    @apply transition;
}

.btn-create {
    @apply py-2 px-4;
    @apply font-semibold text-[#5985b2] hover:text-slate-100 text-lg;
    @apply bg-transparent hover:bg-[#2b4e71];
    @apply border border-[#5985b2] hover:border-transparent rounded;
    @apply transition;
}
</style>
