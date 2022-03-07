import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'


const routes = [
    {path: '/', name:'Home', component: Home},
    {path: '/blog', name:'Blog', component: Blog},
    {path: '/projects', name:'Projects', component: Projects},
    {path: '/Contact', name:'Contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router