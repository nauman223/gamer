import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Code from '../views/code.vue'
import Contact from '../views/contact.vue'
import login from '../views/login.vue'
import promoCode from '../views/promoCode.vue'
import promoPage from '../views/promoPage.vue'
import vip from '../views/vip.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/code',
    name: 'code',
    component: Code
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/promoCode',
    name: 'promoCode',
    component: promoCode
  },
  {
    path: '/promoPage',
    name: 'promoPage',
    component: promoPage
  },
  {
    path: '/vip',
    name: 'vip',
    component: vip
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
