import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/index'
import Login from '@/components/login/login'
// import Register from '@/views/Register'




Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: Register
        // },
        // {
        //     // 新闻详情页面
        //     path: '/NewsDetail',
        //     name: 'NewsDetail',
        //     component: NewsDetail,
        //     meta: {
        //         title: '新闻详情'
        //     }
        // },
       
        
    ]
})