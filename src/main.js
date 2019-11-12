import 'lib-flexible/flexible.js'
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Toast,Checkbox, CheckboxGroup
} from 'vant'
import '@/assets/less/public.less'
import '@/assets/less/style.less'
import 'swiper/dist/css/swiper.min.css'
import 'vant/lib/index.css'
import 'animate.css'
// import Axios from 'axios';



//全局注册icon-svg
Vue.use(Toast)
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Vuex);
Vue.config.productionTip = false


// 兼容ipad,ipod
let reg = /(iPad|iPod)/i
let head, viewport = ''
if (reg.test(navigator.userAgent)) {
  head = document.getElementsByTagName('head')
  viewport = document.createElement('meta')
  viewport.name = 'viewport'
  viewport.content = 'width=540,height=950, user-scalable=no'
  head.length > 0 && head[head.length - 1].appendChild(viewport)
}
// 兼容ipad,ipod
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
  })







// .$mount('#app')