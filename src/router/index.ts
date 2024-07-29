import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'productsParen',
      component: () => import('@/views/ProductsParentView.vue'),
      children: [
        {
          path: '',
          name: 'billsList',
          component: () => import('@/views/products/BillsView.vue'),
        },
        {
          path: 'chores',
          name: 'chores',
          component: () => import('@/views/products/ChoresView.vue'),
        },
      ],
    },
  ],
})

export default router
