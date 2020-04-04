import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(VueGlide)



window.axios = require('axios');
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
