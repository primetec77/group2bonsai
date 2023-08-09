import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/care',
    name: 'care',
    component: () => import('../views/CareView.vue')
  },
  {
    path: '/indoor',
    name: 'indoor',
    component: () => import('../views/IndoorView.vue')
  },
  {
    path: '/outdoor',
    name: 'outdoor',
    component: () => import('../views/OutdoorView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
