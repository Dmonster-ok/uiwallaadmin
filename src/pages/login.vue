<script setup>
import { ref } from "vue";
import axios from "axios";

let email = ref("");
let password = ref("");
let error = ref("");
let success = ref("");

axios.defaults.baseURL = "http://localhost:3000";

if (localStorage.getItem("token")) {
  // window.location.href = "/dashboard";
}

const handleLogin = async () => {
  console.log("OK", email.value, password.value);
  try {
    const response = await axios.post("http://localhost:3000/login", {
      email: email.value,
      password: password.value,
    });

    console.log("Login successful:", response.data);
    localStorage.setItem("token", response.data.token);
    success.value = "Login successful";
  } catch (err) {
    error.value = "Invalid email or Password";
    console.error("Login failed:", err);
  }
};

const handleTestLogin = async () => {
  success.value = "Login successful";
  localStorage.setItem("token", "test");

  // redirect to dashboard
  window.location.href = "/dashboard";
};
</script>

<template>
  <div
    class="w-screen h-screen bg-transparent flex items-center justify-center"
  >
    <div class="login-card flex flex-row items-center gap-5 backdrop-blur">
      <div class="login-img w-96 h-96 rounded-lg"></div>
      <div class="buttons flex flex-col gap-8 ml-5">
        <div class="inputs flex flex-col gap-4">
          <div class="w-full h-auto flex flex-col">
            <input
              class="input-fl"
              type="email"
              id="Email"
              @input="email = $event.target.value"
              placeholder="Admin email"
            />
          </div>
          <div class="w-full h-auto flex flex-col mt-2">
            <input
              class="input-fl"
              type="password"
              id="Pass"
              @input="password = $event.target.value"
              placeholder="Password"
            />
          </div>
          <div class="pl-2 text-red-500" v-if="error">{{ error }}</div>
          <div class="pl-2 text-green-500" v-if="success">{{ success }}</div>
        </div>
        <button @click="handleTestLogin" class="btn-secondary">TestLogin</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  @apply w-max h-max;
  @apply bg-[#0a0b14a9];
  @apply rounded-lg;
  @apply p-8;
  @apply border-2 border-[#232637];
}

.input-fl {
  @apply bg-[#232637];
  @apply w-72;
  @apply px-4 py-2;
  @apply align-middle;
  @apply rounded-md border-2 border-[#2b4e7100];
  @apply focus:outline-none focus:border-[#2b4e71];
  @apply transition;
}

.login-img {
  background-image: url(/login-card.svg);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
