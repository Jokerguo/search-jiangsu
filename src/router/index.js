import VueRouter from 'vue-router'
import Home from '../views/Home'
import Nanjing from '../views/Nanjing'
import Nantong from '../views/Nantong'
import Suzhou from '../views/Suzhou'
import Wuxi from '../views/Wuxi'
import Yancheng from '../views/Yancheng'
import Yangzhou from '../views/Yangzhou'
import End from '../views/end'
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/nanjing',
        component: Nanjing
    },
    {
        path: '/nantong',
        component: Nantong
    },
    {
        path: '/suzhou',
        component: Suzhou
    },
    {
        path: '/wuxi',
        component: Wuxi
    },
    {
        path: '/yancheng',
        component: Yancheng
    },
    {
        path: '/yangzhou',
        component: Yangzhou
    },
    {
        path: '/end',
        component: End
    },
]

const router = new VueRouter({
    routes
})

export default router