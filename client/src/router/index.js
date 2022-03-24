import { createRouter, createWebHistory } from 'vue-router'
// import Timer from '../views/Timer.vue'
import Projects from '../views/Projects';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Project',
    component: Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Stopwatch.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
