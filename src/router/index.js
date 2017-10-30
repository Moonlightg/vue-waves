import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import One from '@/components/one'
import Two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    }
  ]
})
