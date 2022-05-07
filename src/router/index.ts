import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from "../views/home/home.vue";
import Carousel from "../views/carousel/carousel.vue";
import Waterfalls from "../views/waterfalls/waterfalls.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', component: Home },
    { path: '/carousel', name: 'carousel', component: Carousel },
    { path: '/waterfalls', name: 'waterfalls', component: Waterfalls, }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router