
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CoursesView from '../views/CoursesView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cursos',
    name: 'courses',
    component: CoursesView
  },
  {
    path: '/contato',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
