import Vue from 'vue'
import App from './App'
import {post} from './request/index'
import "./common/iconfont.css"
import "./common/iconfont2.css"
import "./common/global.scss"

Vue.config.productionTip = false
Vue.prototype.$post = post

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
