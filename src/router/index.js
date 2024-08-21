import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/modules/home/Home.vue'
import Structure from '../views/structure/structure/Structure.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes: [
    {
      path: '/',
      redirect: '/main/home'
    },
    {
        path: '/main',
        component: Structure,
        children:[
            {
                path: 'home',
                name: 'home',
                component: Home
              }
        ]
    }
  ]
})

export default router
