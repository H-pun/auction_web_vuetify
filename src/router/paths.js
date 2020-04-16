export default
  [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Admin/Category/index.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/Category/About.vue')
    // }
  ]
