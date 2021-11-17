import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import axios from 'axios';
import FlashMessage from '@smartweb/vue-flash-message';
import store from './store';


//import Vuex from 'vuex';


Vue.use(FlashMessage);
Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
 
axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
  
        originalRequest._retry = true;
        store.dispatch('LogOut')
        return router.push('/login')
    }
  }
})

Vue.config.productionTip=false;

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
