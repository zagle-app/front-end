import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import VueFormulate from '@braid/vue-formulate'
import VueCookies from 'vue-cookies'


Vue.use(VueRouter)
Vue.use(VueFormulate)
Vue.use(VueCookies)
Vue.use(VueAxios, axios)


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/konsultant',
    name: 'Konsultant',
    component: Home
  },
  {
    path: '/klient',
    name: 'Klient',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
