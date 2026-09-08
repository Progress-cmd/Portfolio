import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Project from './views/Project.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:slug',
    name: 'Project',
    component: Project
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
