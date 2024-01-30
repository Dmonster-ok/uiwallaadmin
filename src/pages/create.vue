<script setup>
import navBar from "../components/navbar.vue";
</script>

<template>
    <div class="w-full h-full flex flex-col">
        <navBar />
        <div class="h-full flex flex-col gap-2 p-2">
            <div class="flex-none flex gap-2 w-full">
                <div class="card w-full flex flex-col gap-2">
                    <div class="card-title flex justify-center items-center">
                        <p>HTML</p>
                    </div>
                    <textarea name="" id="" class="codespace"></textarea>
                </div>
                <div class="card w-full flex flex-col gap-2">
                    <div class="card-title flex justify-center items-center">
                        <p>CSS</p>
                    </div>
                    <textarea name="" id="" class="codespace"></textarea>
                </div>
                <div class="card w-full flex flex-col gap-2">
                    <div class="card-title flex justify-center items-center">
                        <p>JS</p>
                    </div>
                    <textarea name="" id="" class="codespace"></textarea>
                </div>
            </div>
            <div class="flex flex-row gap-2">
                <div class="card w-4/5">
                    <iframe src="" class="w-full h-full" frameborder="0"></iframe>
                </div>
                <div class="card w-1/5 flex flex-col justify-between">
                    <div class="flex flex-col p-4">
                        <label for="title" class="text-lg tracking-widest">Title</label>
                        <input type="text" class="input-fl w-full" id="title" placeholder="Name of component">
                        
                        <label for="cat" class="text-lg tracking-widest">Select Category</label>
                        <button id="cat"></button>
                    </div>
                    <button class="btn-pirmary">Create</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.codespace{
    @apply h-full resize-x rounded-md p-2 bg-[#1f213955] ;
}
.input-fl {
  @apply bg-[#232637] align-middle;
  @apply px-4 py-2;
  @apply rounded-md border-2 border-[#2b4e7100];
  @apply focus:outline-none focus:border-[#2b4e71];
  @apply transition;
}

</style>
