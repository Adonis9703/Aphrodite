import Vue from 'vue'
import App from './App'
import {post} from './request/index'

Vue.config.productionTip = false
Vue.prototype.$post = post

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
