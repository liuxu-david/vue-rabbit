import { createRouter, createWebHashHistory } from 'vue-router'

import TopCategory from '@/views/category/index'
import SubCategory from '@/views/category/sub'

const Loyout = () =>
    import ("@/views/Loyout.vue")
const Home = () =>
    import ("@/views/home/index.vue")
const routes = [{
    path: "/",
    component: Loyout,
    children: [{
        path: "/",
        component: Home
    }, {
        path: '/category/:id',
        component: TopCategory
    }, {
        path: '/category/sub/:id',
        component: SubCategory
    }]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router