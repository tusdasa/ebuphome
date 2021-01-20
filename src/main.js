import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import settings from '@/settings'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

// 站点标题
Vue.prototype.$SITENAME = settings.title

Vue.prototype.$SERVER_ADDRESS = settings.server
//域名
Vue.prototype.$DOMAIN = settings.domain

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

