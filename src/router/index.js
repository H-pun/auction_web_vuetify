import Vue from 'vue'
import Router from 'vue-router'
import Paths from './paths'

Vue.use(Router)

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: Paths
})
