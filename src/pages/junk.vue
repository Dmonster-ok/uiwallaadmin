<div class="w-full flex flex flex-col">
    <navBar />
    <div class="h-full flex flex-col gap-2 p-2">
        <div class="flex-none flex gap-2 w-full">
            <div class="card w-full flex flex-col gap-2">
                <div class="card-title flex justify-center items-center">
                    <p>HTML</p>
                </div>
                <textarea id="htmlarea" v-model="htmlcode" class="codespace" tabindex="-1" />
            </div>
            <div class="card w-full flex flex-col gap-2">
                <div class="card-title flex justify-center items-center">
                    <p>CSS</p>
                </div>
                <textarea id="cssarea" v-model="csscode" class="codespace" tabindex="-1" />
            </div>
            <div class="card w-full flex flex-col gap-2">
                <div class="card-title flex justify-center items-center">
                    <p>JS</p>
                </div>
                <textarea id="jsarea" v-model="jscode" class="codespace" tabindex="-1" />
            </div>
        </div>
        <div class="flex flex-row gap-2">
            <div class="card w-4/5">
                <iframe class="w-full h-full rounded-md" frameborder="0"></iframe>
            </div>
            <div class="card w-1/5 flex flex-col justify-between">
                <div class="flex flex-col p-4">
                    <label for="title" class="text-lg tracking-widest">Title</label>
                    <input type="text" v-model="title" class="input-fl w-full" id="title"
                        placeholder="Name of component">

                    <label for="cat" class="text-lg tracking-widest mt-4">Select Category</label>
                    <input type="text" v-model="category" class="input-fl w-full" id="cat"
                        placeholder="Name of component">
                    <button id="cat"></button>
                </div>
                <button class="btn-secondary" @click="updateComponent" v-if="isCreated">Update</button>
                <button class="btn-pirmary" @click="createComponent" v-else>Create</button>
            </div>
        </div>
    </div>
</div>