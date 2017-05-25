import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('@/components/index/index')
        },
        {
            path: '/Company',
            component: require('@/components/Company/index'),
            children: [
                {
                    path: '',
                    component: require('@/components/Company/survey/index')
                },
                {
                    path: 'structure',
                    component: require('@/components/Company/structure/index')
                },
                {
                    path: 'scene',
                    component: require('@/components/Company/scene/index')
                },
                {
                    path: 'feature',
                    component: require('@/components/Company/feature/index')
                },
                {
                    path: 'advantage',
                    component: require('@/components/Company/advantage/index')
                },
                {
                    path: 'serve',
                    component: require('@/components/Company/serve/index')
                },
                {
                    path: 'goods',
                    component: require('@/components/Company/goods/index')
                },
            ]
        },
        {
            path: '/download/:id',
            component: require('@/components/Download/index')
        },
        {
            path: '/NewArivals/:id',
            component: require('@/components/NewArivals/index')
        },
        {
            path: '/news/:id',
            component: require('@/components/news/index')
        },
        {
            path: '/contact',
            component: require('@/components/contact/index'),
            children: [
                {
                    path: 'online',
                    component: require('@/components/contact/online/index')
                },
                {
                    path: 'contactUs',
                    component: require('@/components/contact/contactUs/index')
                },
                {
                    path: 'talented',
                    component: require('@/components/contact/talented/index')
                }
            ]
        }
    ]
})
