import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Guest from '../middleware/guest';
import Auth from '../middleware/auth';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {'middleware': {guest: Guest}, 'layout': 'app' }
  },
  {
    path: '/category/:slug',
    name: 'category.show',
    component: () => import('../views/category/Show.vue'),
    meta: {'middleware': {auth: Auth}, 'layout': 'app' }
  }
]

const router = new VueRouter({
  routes
})

export default router
