import Vue from 'vue'
import App from './App.vue'


/* -------------- BOOTSTRAP --------------- */
//https://getbootstrap.com/docs/4.6/getting-started/introduction/
//Instalación: npm i bootstrap@4 jquery popper.js
import './bootstrap'


/* -------------- AXIOS --------------- */
//https://www.npmjs.com/package/axios
//https://www.npmjs.com/package/vue-axios
//Instalación: npm i axios vue-axios@3.4.1
import './axios'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
