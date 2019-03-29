import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/ui/TablePage').default
    },
    {
      path: '/layout-page',
      component: require('@/ui/LayoutPage').default
    },
    {
      path: '/section-page',
      component: require('@/ui/SectionPage').default
    },
    {
      path: '/table-page',
      component: require('@/ui/TablePage').default,
    },
    {
      path: '/table-page:name',
      component: require('@/ui/TablePage').default,
    },
    {
      path: '/filter-page',
      component: require('@/ui/FilterPage').default,
      children: [
        {
          path: 'table',
          component: require('@/ui/Filterpage/Table').default
        },
        {
          path: 'input',
          component: require('@/ui/Filterpage/Input').default
        },{
          path: 'radio',
          component: require('@/ui/Filterpage/Radio').default
        },{
          path: 'select',
          component: require('@/ui/Filterpage/Select').default
        },{
          path: 'dateRange',
          component: require('@/ui/FilterPage/DateRange').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
