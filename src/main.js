import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.directive('title', {
  inserted: function (el) {
    document.title = el.dataset.title
  }
})

// 站点标题
Vue.prototype.$SITENAME = 'EPUB 之家'
// 后端地址 注意格式http://域名地址
Vue.prototype.$SERVER_ADDRESS = 'http://127.0.0.1'
//域名
Vue.prototype.$DOMAIN = 'http://www.tusdasa.net'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

