import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Guest from '../middleware/guest'
import Auth from '../middleware/auth'
import isNil from 'lodash/isNil'

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
  },
  {
    path: '/account',
    name: 'account.dashboard',
    component: () => import('../views/account/Dashboard.vue'),
    meta: {'middleware': {auth: Auth}, 'layout': 'app' }
  },
  {
    path: '/account/orders',
    name: 'account.orders',
    component: () => import('../views/account/Order.vue'),
    meta: {'middleware': {auth: Auth}, 'layout': 'app' }
  },
  {
    path: '/account/addresses',
    name: 'account.addresses',
    component: () => import('../views/account/Address.vue'),
    meta: {'middleware': {auth: Auth}, 'layout': 'app' }
  },
  {
    path: '/account/edit-profile',
    name: 'account.edit.profile',
    component: () => import('../views/account/EditProfile.vue'),
    meta: {'middleware': {auth: Auth}, 'layout': 'app' }
  },
]

const router = new VueRouter({
  routes
})

// GLobal BEFORE hooks:
router.beforeEach((to, from, next) => { 
  
  if (!isNil(to.meta.middleware))
  {
      Object.keys(to.meta.middleware).map(function(objectKey) {
          if (objectKey === "guest") {
            if (to.meta.middleware[objectKey](to))
            {
              next();
            } else {
              next()
            }
          }
          if (objectKey === "auth") {
            if (!to.meta.middleware[objectKey](to))
            {
                next('/login');
            } else {
              next()
            }
          }
      });
     
    } else {
      next()
    }

})

export default router
