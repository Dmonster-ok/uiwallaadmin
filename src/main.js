import 'material-icons/iconfont/material-icons.css'
import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import dashboard from './pages/dashboard.vue'
import login from './pages/login.vue'
import create from './pages/create.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: login },
        { path: '/dashboard', component: dashboard },
        { path: '/create', component: create },
    ]
});

const app = createApp(App)

app.use(router);
app.component('dashboard', dashboard);
app.component('login', login);
app.component('create', create);

app.mount('#app')