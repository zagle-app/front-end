import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueFormulate from '@braid/vue-formulate'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Keycloak from "keycloak-js";


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  VueFormulate,
  VueCookies,
  axios,
  VueAxios,
  Keycloak,
  render: h => h(App)
}).$mount('#app')
