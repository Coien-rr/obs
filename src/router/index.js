import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {
        path: '/login',
        name: 'Login',
        component: ()=> import('../views/login/index')
    },
    {
        path: '/home',
        name: 'Home',
        component: ()=>import('../views/home/index'),
        children:[
            {   path: '/home',redirect:'/detail' },
            {
                path:'/detail',
                name:'Detail',
                component:()=>import('../views/home/detail/index')
            },
            {
                path: '/chart',
                name: 'Chart',
                component:()=>import('../views/home/chart/index')
            },
            {
                path: '/user',
                name: 'User',
                component:()=>import('../views/home/user/index')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router
