import Vue from 'vue'
import App from './App.vue'
import store from './store'


//icon-font
import SvgIcon from './component/SvgIcon.vue';
import FontIcon from './component/FontIcon.vue';
import './assets/css/icon-font/iconfont.css';
import './assets/css/icon-font/iconfont.js';

Vue.component('SvgIcon', SvgIcon);
Vue.component('FontIcon', FontIcon);

new Vue({
	el: '#app',
	store,
	render: h => h(App)
})