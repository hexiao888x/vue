import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import { Header } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
Vue.component(Header.name, Header)
import { Switch } from 'mint-ui';
import 'mint-ui/lib/switch/style.css'
Vue.component(Switch.name, Switch);
import router from './router.js'

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})