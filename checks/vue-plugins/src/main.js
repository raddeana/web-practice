import Vue from 'vue';
import App from './App.vue';
import './assets/test.css';
import './web-components';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
