// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

//导入组件
import Home from './pages/Home'
import Detail from './pages/Detail'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})
/* eslint-disable no-new */
new Vue({
   data(){  
    return {  
        transitionName: 'slide'  
    }  
  },  
  el: '#app',
  router
})
