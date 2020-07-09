import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import moment from 'moment'
import Axios from 'axios'
import table from './views/table.vue'
import form from './views/form.vue'
import detail from './views/detail.vue'

Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api'
Vue.use(moment)
Vue.use(VueRouter)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
const router = new VueRouter({
	linkActiveClass:"active",
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', component: table },
    { path: '/table', component: table },
    { path: '/form', component: form },
    { path: '/detail', component: detail }
  ]
})
//全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
  console.log(to)
  console.log(from)
  console.log(next)
  next()
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
