import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../page/HomePage.vue'
import MayTinh from '../page/MayTinh.vue'

const routers = [
  {
    path: '/',
    name: 'Trang-Chu',
    component: HomePage,
  },
  {
    path: '/may-tinh',
    name: 'MayTinh',
    component: MayTinh,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routers,
})
