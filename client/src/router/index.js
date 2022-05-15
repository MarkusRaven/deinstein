import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/tiles',
    name: 'Tiles',
    meta: {layout: 'main'},
    component: () => import( '../views/Tiles.vue')
  },
  {
    path: '/tiles/:id',
    name: 'Tile',
    meta: {layout: 'main'},
    component: () => import( '../views/Tile.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    meta: {layout: 'main'},
    component: () => import( '../views/Payment.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {layout: 'main'},
    component: () => import( '../views/Cart.vue')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    meta: {layout: 'main'},
    component: () => import( '../views/thanks.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main', requiresAuth: true},
    component: () => import( '../views/Profile.vue')
  },
  {
    path: '/activate/:code/:token',
    name: 'Activate',
    meta: {layout: 'main'},
    component: () => import( '../views/Activate.vue')
  },
  {
    path: '/emailcheck',
    name: 'EmailCheck',
    meta: {layout: 'main'},
    component: () => import( '../views/EmailCheck.vue')
  },
  {
    path: '/data',
    name: 'Data',
    meta: {layout: 'main'},
    component: () => import( '../views/Data.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    meta: {layout: 'main'},
    component: () => import( '../views/Impressum.vue')
  },
  {
    path: '/svgeditor',
    name: 'svgEditor',
    meta: {layout: 'editor'},
    component: () => import( '../views/SvgEditor.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token')) {
      next() 
      return
    }
    next('/') 
  } else {
    next() 
  }
})

export default router
