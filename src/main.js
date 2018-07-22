// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

Vue.config.productionTip = false
Vue.use(VueRouter)

// console.log(store.dispatch('fetchImages'))

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store,
  components: { App },
  template: '<App/>'
})
