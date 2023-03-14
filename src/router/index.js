import { createRouter, createWebHistory } from 'vue-router'
import List from '../components/student/List.vue'
import Add from '../components/student/Add.vue'
import View from '../components/student/View.vue'
import Edit from '../components/student/Edit.vue'
import NotFound from '../components/views/NotFound.vue'

const routes  = [ 
    {
        path:'/',
        component:List,
        name:"List",
        alias:'/list'
    },
    {
        path:'/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path:'/add',
        name: 'add',
        component: Add,
    },
    {
        path:'/view/:id',
        name: 'view',
        component: View,    
    },
    {
        path:'/edit/:id',
        name: 'edit',
        component: Edit,
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})
export default router