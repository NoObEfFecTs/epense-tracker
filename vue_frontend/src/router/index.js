import { createRouter, createWebHistory } from 'vue-router'
import ExpenseListView from '@/views/ExpenseListView.vue'
import ExpenseDetailsView from '@/views/ExpenseDetailsView.vue'
import ExpenseOverView from '@/views/OverviewView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'expense-overview',
      component: ExpenseOverView,
    },
    {
      path: '/expense-list',
      name : 'expense-list',
      component : ExpenseListView
    },
    {
      path: '/expense/:id',
      name: 'expense-details',
      props: true,
      component: ExpenseDetailsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
