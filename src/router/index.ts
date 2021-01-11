import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/Hello.vue'
import TimeTable from '../components/TimeTable.vue'
import MyTable from '../components/Table.vue'
import Login from '../login/Login.vue'
import NotFind from '../views/NotFind.vue'
import Nav from '../components/Nav.vue'

Vue.use(Router)

const routes = [{
        path: '/',
        component: HelloWorld,
        name: 'helloWorld',
        children: [{
                path: 'nav',
                component: Nav
            },
            // {
            //     path: 'table2',
            //     component: Table
            // },
            {
                path: 'table3',
                component: MyTable
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        // props: (route) => ({ query: route.query.q, id: route.params.id }),
        name: 'login',
        // scrollBehavior(to, from, savedPosition) {
        //     if (to.hash) {
        //         return {
        //             selector: to.hash
        //         }
        //     }
        // }
        // scrollBehavior(to, from, savedPosition) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve({ x: 0, y: 0 })
        //         }, 500)
        //     })
        // }
    },
    // {
    //     path: '/home/:id',
    //     components: { default: Home, bar: Login },
    //     props: { default: true, bar: true },
    // },
    {
        path: '/timeTable',
        component: TimeTable,
        children: [
        //     {
        //     path: '/email',
        //     components: {
        //         default: Nav,
        //     }
        // }, 
        {
            path: '/profile',
            components: {
                default: MyTable,
                helper: Login,
            }
        }],
        name: 'Settings'
    },
    // {
    //     path: '/slot',
    //     component: Slot
    // },
    {
        path: '/*',
        component: NotFind,
    }
]

export default new Router({
    // mode: 'history',
    routes
})