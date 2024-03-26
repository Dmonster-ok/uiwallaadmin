<script setup>
import navBar from "../components/navbar.vue";
import { ref, watch } from "vue";
import axios from "axios";

const title = ref("");
const id = ref("");
const category = ref("");
let code = ref(['', '', ''])
const htmlcode = ref(``);
const csscode = ref(``);
const jscode = ref(``);
const isCreated = ref(false);

function createComponent() {

    if (title.value != '' && category.value != '' && htmlcode.value != '') {
        axios.post("http://localhost:3000/component", {
            title: title.value,
            category: category.value,
            html: htmlcode.value,
            css: csscode.value,
            js: jscode.value,
        }, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }).then(function (data) {
            id.value = data.data.id;
        })
        isCreated.value = true;
    }
    else {
        alert("fileds are empty")
    }
}

function updateComponent() {
    axios.put("http://localhost:3000/component", {
        id: id.value,
        title: title.value,
        category: category.value,
        html: htmlcode.value,
        css: csscode.value,
        js: jscode.value,
    }, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    })
}

function addindent(event) {
    console.log(event);
    event.preventDefault();
    
}
const display = ref("<h1>Hellow</h1>");

</script>

<template>
    <div class="w-full h-full flex flex-col">
        <navBar />
        <div class="h-full flex flex-col gap-2 p-1">
            <div class="h-1/2 flex flex-row gap-2">
                <div class="card w-full flex flex-col gap-2">
                    <div class="card-title flex justify-center items-center">
                        <p>HTML</p>
                    </div>
                    <textarea id="htmlarea" v-model="htmlcode" class="codespace" tabindex="-1"
                        @keydown.tab="addindent" />
                </div>
                <div class="card w-full flex flex-col gap-2">
                    <div class="card-title flex justify-center items-center">
                        <p>CSS</p>
                    </div>
                    <textarea id="cssarea" v-model="csscode" class="codespace" tabindex="-1" @keydown.tab="addindent" />
                </div>
                <div class="card w-full flex flex-col gap-2">
                    <div class="card-title flex justify-center items-center">
                        <p>JS</p>
                    </div>
                    <textarea id="jsarea" v-model="jscode" class="codespace" tabindex="-1" @keydown.tab="addindent" />
                </div>
            </div>
            <div class="h-1/2 flex flex-row gap-2">
                <iframe class="card w-4/5 h-full" frameborder="0" :srcdoc="display"></iframe>
                <div class="card w-1/5 flex flex-col justify-between">
                    <div class="flex flex-col p-4 gap-y-2">
                        <label for="title" class="text-lg tracking-widest">Title</label>
                        <input type="text" v-model="title" class="input-fl w-full" id="title"
                            placeholder="Name of component">
                        <label for="cat" class="text-lg tracking-widest">Category</label>
                        <input type="text" v-model="category" class="input-fl w-full" id="cat"
                            placeholder="Name of component">
                    </div>
                    <button class="btn-secondary" @click="updateComponent" v-if="isCreated">Update</button>
                    <button class="btn-pirmary" @click="createComponent" v-else>Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.codespace {
    @apply h-full resize-x rounded-md p-2 bg-[#1f213955];
    @apply border-2 border-[#2b4e7100] focus:outline-none focus:border-[#2b4e71] transition;
}

.input-fl {
    @apply bg-[#232637] align-middle;
    @apply px-4 py-2;
    @apply rounded-md border-2 border-[#2b4e7100];
    @apply focus:outline-none focus:border-[#2b4e71];
    @apply transition;
}
</style>
