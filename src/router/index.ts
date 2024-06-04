import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/pages/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router