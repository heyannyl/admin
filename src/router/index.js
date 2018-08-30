import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'

import UserProfile from '@/components/content/demo1'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            component: Main,
        },
        {
            path: '/',
            name: '_home',
            redirect: '/home',
            component: Main,
            // meta: {
            //   hideInMenu: true,
            //   notCache: true
            // },
            children: [
                {
                    path: 'demo1',
                    name: 'demo1',
                    meta: {
                        icon: 'md-trending-up',
                        title: '数字渐变'
                    },
                    component: UserProfile,
                },
                {
                    path: 'demo2',
                    name: 'demo2',
                    meta: {
                        icon: 'md-trending-up',
                        title: '数字渐变'
                    },
                    component: () => import('@/components/content/demo2')
                },
                {
                    path: 'demo3',
                    name: 'demo3',
                    meta: {
                        icon: 'md-trending-up',
                        title: '数字渐变'
                    },
                    component: () => import('@/components/content/demo3')
                },
            ]
        },

    ]
})
