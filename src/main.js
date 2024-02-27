import 'material-icons/iconfont/material-icons.css'
import './style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import dashboard from './pages/dashboard.vue'
import login from './pages/login.vue'
import create from './pages/create.vue'
import search from './pages/search.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',name: 'Login', component: login },
        { path: '/dashboard',name:'Dashboard', component: dashboard },
        { path: '/create',name:'Create', component: create },
        { path: '/search',name:'Search', component: search },
    ]
});

const app = createApp(App)

app.use(router);
app.component('dashboard', dashboard);
app.component('login', login);
app.component('create', create);

app.mount('#app')