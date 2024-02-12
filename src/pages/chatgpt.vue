<template>
    <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 p-4">
            <textarea v-model="htmlCode" class=" text-black w-full h-48 p-2 border border-gray-300 rounded-md resize-none"
                placeholder="Enter HTML code"></textarea>
        </div>
        <div class="w-full sm:w-1/2 p-4">
            <textarea v-model="cssCode" class="text-black w-full h-48 p-2 border border-gray-300 rounded-md resize-none"
                placeholder="Enter CSS code"></textarea>
        </div>
        <div class="w-full p-4">
            <textarea v-model="jsCode" class="text-black w-full h-48 p-2 border border-gray-300 rounded-md resize-none"
                placeholder="Enter JavaScript code"></textarea>
        </div>
        <div class="w-full p-4">
            <iframe :srcdoc="compiledCode" class="w-full h-64 border border-gray-300 rounded-md"></iframe>
        </div>
    </div>
</template>
  
<script>
export default {

        return {
            htmlCode: '',
            cssCode: '',
            jsCode: ''
        }
    },
    computed: {
        compiledCode() {
            return `
          <html>
            <head>
              <style>${this.cssCode}
              *{
                color: white;
              }
              </style>
            </head>
            <body>${this.htmlCode}<\/body>
            <script>${this.jsCode}
<\/script>
          <\/html>
        `;
      }
    }
  } 
  </script>
  
<style scoped>
</style>
  