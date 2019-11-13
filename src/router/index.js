import Vue from 'vue'
import Router from 'vue-router'

import webLayout from '@/components/base/mainLayout';
import NotFoundComponent from '@/components/base/notFound';
import Index from '@/components/index/index'
import Login from '@/components/login/login'
import Dispose from '@/components/dispose/dispose'
import Member from '@/components/member/member'
import Card from '@/components/card/card'
import Works from '@/components/works/works'




Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
        // 找不到對應目錄時的畫面組件
            path: '*',
            component: NotFoundComponent,
        },{
            path: '/',
            // name: 'webLayout',
            component: webLayout,
            children: [
            //预约管理
            {
                path: '',
                name: 'webIndex',
                component: Index,
            },
            //登录
            {
                path: '/login',
                name: 'webLogin',
                component: Login
            },
            //配置管理
            {
                path: '/dispose',
                name: 'webDispose',
                component: Dispose
            },
            //会员管理
            {
                path: '/member',
                name: 'webMember',
                component: Member
            },
            //卡券管理
            {
                path: '/card',
                name: 'webCard',
                component: Card
            },
            //客照管理
            {
                path: '/works',
                name: 'webWorks',
                component: Works
            }]
        }
        
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