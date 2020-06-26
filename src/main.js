import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import vuetify from './plugins/vuetify'
import router from './router'
import VueMeta from 'vue-meta';

Vue.config.productionTip = false
Vue.use(VueMeta);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
