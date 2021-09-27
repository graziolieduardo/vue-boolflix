import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('fa', FontAwesomeIcon)
Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
