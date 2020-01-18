import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Developer from '../views/Developer.vue'
import Business from '../views/Business.vue'
import Designer from '../views/Designer.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/developer',
    name: 'developer',
    component: Developer
  },
  {
    path: '/business',
    name: 'business',
    component: Business
  },
  {
    path: '/designer',
    name: 'designer',
    component: Designer
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]

const router = new VueRouter({
  routes
})

export default router
