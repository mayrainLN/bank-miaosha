import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vuetify from './plugins/vuetify'

// Vue.config.productionTip = false
Vue.use(ElementUI,{ size: 'medium', zIndex: 3000 });

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
