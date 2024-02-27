<script setup>
import navBar from "../components/navbar.vue";
import { ref, watch } from "vue";
import axios from "axios";

const title = ref("");
const id = ref("");
const category = ref("");
const htmlcode = ref(``);
const csscode = ref(``);
const jscode = ref(``);
const isCreated = ref(false);

function createComponent() {
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


function display(html, css, js) {
    const genHTML = ref(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            *{
                margin: 0px;
                padding: 0px;
                background: transparent;
                color: white;
            }
            body{
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            ${css}
        <\/style>
    </head>
    <body>
        ${html}
        <script>
        ${js}
        <\/script>
    <\/body>
    <\/html>
    `);
    result = genHTML;
}


</script>

<template>
    <div class="w-full h-full flex flex-col">
        <navBar />
        <div class="h-full flex flex-col gap-2 p-1">
            <div class="h-1/2 flex flex-row gap-2">
                <div class="card flex flex-col gap-y-2 w-1/3 min-w-fit">
                    <div class="card-title flex justify-center items-center">HTML</div>
                    <textarea name="" class="w-full codespace" />
                </div>
                <div class="card flex flex-col gap-y-2 w-fit">
                    <div class="card-title flex justify-center items-center">CSS</div>
                    <textarea name="" class="w-full codespace" />
                </div>
                <div class="card flex flex-col gap-y-2 w-fit">
                    <div class="card-title flex justify-center items-center">JS</div>
                    <textarea name="" class="w-full codespace" />
                </div>
            </div>
            <div class="h-1/2 flex flex-row gap-2">
                <iframe class="card w-4/5 h-full" frameborder="0"></iframe>
                <div class="card w-1/5"></div>
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
