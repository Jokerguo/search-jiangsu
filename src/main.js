import Vue from 'vue'
import App from './App.vue'
import './style/reset.scss'
import router from './router/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
