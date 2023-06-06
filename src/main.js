import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter , createWebHistory } from 'vue-router';
import HomeComp from "./components/Home.vue";
import DetailsComp from "./components/details.vue";
import LoginComp from "./components/login.vue";

const routes=[
    {path:'/',component:HomeComp},
    {path:'/Games/:id',component:DetailsComp},
    {path:'/login',component:LoginComp},

]
import './assets/main.css'
const router=createRouter({
    history:createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
