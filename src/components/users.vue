<script setup>
import { ref } from "vue";
let username = ref("username")

</script>

<template>
    <div v-for="n in 100" class="w-full rounded-md border my-2 p-1">
        <div class="flex flex-row gap-5 items-center">
            <span class="ml-2 w-5">{{ n }}.</span>
            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <p>username{{ Math.round(n*3.14) }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
