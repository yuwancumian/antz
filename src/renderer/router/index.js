import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
 
    {
      path: '/',
      component: require('@/components/GenPage').default
    },
    {
      path: '/layout-page',
      component: require('@/components/LayoutPage').default
    },
    {
      path: '/thead-page',
      component: require('@/components/THeadPage').default
    },
    {
      path: '/table-page',
      component: require('@/components/TablePage').default
    },
    {
      path: '/form-page',
      component: require('@/components/FormPage').default
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
