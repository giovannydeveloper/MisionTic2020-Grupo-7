import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Router from './router'
import axios from 'axios';
import FlashMessage from '@smartweb/vue-flash-message';


//import Vuex from 'vuex';


Vue.use(FlashMessage);
Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
/*Vue.use(Vuex);

const Store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          }
      }
  }
);
*/
new Vue({
  router: Router,
//store: Store,
  render: h => h(App),
}).$mount('#app')
