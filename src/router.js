import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/procjene',
      name: 'procjene',
      component: () => import(/* webpackChunkName: "procjene" */ './views/Procjene.vue')
    },
    {
      path: '/vjestacenje',
      name: 'vjestacenje',
      component: () => import(/* webpackChunkName: "vjestacenje" */ './views/Vjestacenje.vue')
    },
    {
      path: '/etaziranje',
      name: 'etaziranje',
      component: () => import(/* webpackChunkName: "etaziranje" */ './views/Etaziranje.vue')
    },
    {
      path: '/projektovanje',
      name: 'projektovanje',
      component: () => import(/* webpackChunkName: "projektovanje" */ './views/Projektovanje.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import(/* webpackChunkName: "kontakt" */ './views/Kontakt.vue')
    },
  ]
})
