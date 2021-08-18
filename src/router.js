/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router"

const home = () => import("./views/Home")
const about = () => import("./views/About")

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router

