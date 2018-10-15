import Vue from 'vue'
import App from './App.vue'


//icon-font
import SvgIcon from './component/SvgIcon.vue';
import FontIcon from './component/FontIcon.vue';
import './assets/css/icon-font/iconfont.css';
import './assets/css/icon-font/iconfont.js';

Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);

new Vue({
  el: '#app',
  render: h => h(App)
})
