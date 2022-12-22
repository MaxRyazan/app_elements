import { createWebHistory, createRouter } from 'vue-router'
import HeaderView from '@/view/HeaderView'
import MainPageView from '@/view/MainPageView'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Content',
            component: MainPageView
        },
        {
            path: '/main',
            name: 'Header',
            component: HeaderView
        }
    ]
})
export default router

