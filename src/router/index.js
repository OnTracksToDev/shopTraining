import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '@/views/HomePage.vue'
import ArticlesPage from '@/views/ArticlesPage.vue'
import HelloPage from '@/views/HelloPage.vue'
import PanierPage from '@/views/PanierPage.vue'
import ArticleDetailPage from '@/views/ArticleDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/panier',
      name: 'Panier',
      component: PanierPage
    },

    {
      path: '/Articles',
      name: 'Articles',
      component: ArticlesPage
    },
    {
      path: '/articles/:id',
      name: 'ArticleDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ArticleDetailPage
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: HelloPage
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
