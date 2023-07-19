import { createRouter, createWebHistory } from 'vue-router'
import BodyView from '../views/Body.vue'

const routes = [
  {
    path: '/',
    name: 'Body',
    component: BodyView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
