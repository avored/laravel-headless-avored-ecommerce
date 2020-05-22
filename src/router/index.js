import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Guest from '../middleware/guest'
// import Auth from '../middleware/auth'

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
    meta: {'middleware': {guest: Guest}, 'layout': 'app' }
  },
  {
    path: '/cart',
    name: 'cart.show',
    component: () => import('../views/cart/Show.vue'),
    meta: {'middleware': {guest: Guest}, 'layout': 'app' }
  },
  {
    path: '/checkout',
    name: 'checkout.show',
    component: () => import('../views/checkout/Show.vue'),
    meta: {'middleware': {guest: Guest}, 'layout': 'app' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
    meta: {'middleware': {guest: Guest}, 'layout': 'app' }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/Register.vue'),
    meta: {'middleware': {guest: Guest}, 'layout': 'app' }
  }
]

const router = new VueRouter({
  routes
})

export default router
