import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  components: {
    App,
  },
  render: h => {
    return h(App)
  }
})