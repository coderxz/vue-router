import Vue from 'vue';
import App from './App';
import router from './router'
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false
new Vue({
  router,
  beforeCreate() {
  },
  components: {
    App
  },
  template: '<App/>'
}).$mount('#root')
