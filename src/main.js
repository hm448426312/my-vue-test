import Vue from 'vue'
import App from './App.vue'
import elementui from 'element-ui'

Vue.use(elementui);
new Vue({
  el: '#app',
  render: h => h(App)
});
