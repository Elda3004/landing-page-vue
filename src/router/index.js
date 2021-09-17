import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
//middlewares
import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'

Vue.use(Router)

function configRoutes () {
    return [
        {
            path: '/',
            name: 'contact-page',
            component: () =>
                import(/* webpackChunkName: "LandingPage" */ "@/views/pages/LandingPage"),
            meta: {
                title: "Landing Page"
            }
        },
        {
            path: '/admin',
            name: 'Home',
            component: () =>
                import(/* webpackChunkName: "Container" */ "@/containers/TheContainer"),
            meta: {
                title: "Home",
            },
            children: [
                {
                    path: 'dashboard',
                    name: 'admin.dashboard',
                    component: () =>
                        import(/* webpackChunkName: "Dashboard" */ "@/views/pages/admin/Dashboard"),
                    meta: {
                        title: "Dashboard",
                        middleware: [
                            auth
                        ]
                    }
                },
                {
                    path: 'submissions',
                    name: 'admin.submissions.index',
                    component: () =>
                        import(/* webpackChunkName: "Submissions" */ "@/views/pages/admin/Submissions"),
                    meta: {
                        title: "Submissions",
                        middleware: [
                            auth
                        ]
                    },
                },
            ]
        },
        {
            path: '/auth/login',
            name: 'auth.login',
            component: () =>
                import(/* webpackChunkName: "Login" */ "@/views/pages/Login"),
            meta: {
                middleware: [
                    guest
                ]
            }
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
                render (c) { return c('router-view') }
            },
            children: [
            {
                path: '404',
                name: 'Page404',
                component: () =>
                    import(/* webpackChunkName: "Page404" */ "@/views/pages/Page404"),
            },
            {
                path: '500',
                name: 'Page500',
                component: () =>
                    import(/* webpackChunkName: "Page500" */ "@/views/pages/Page500"),
                },
            ]
        }
    ]
}

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
