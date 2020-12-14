import Vue from 'vue'
import Vuelidate from 'vuelidate'

import VueRouter from 'vue-router'
import Outstation from '../views/Outstation.vue'
import About from '../views/About.vue'
import Oneway from '../views/Oneway.vue'
import Help from '../views/Help.vue'
import Local from '../views/Local.vue'

Vue.use(Vuelidate)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Oneway',
    component: Oneway

  },
  {
    path: '/outstation',
    name: 'Outstation',
    component: Outstation

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/local',
    name: 'Local',
    component: Local

  }
]

const router = new VueRouter({
  routes
})

export default router
