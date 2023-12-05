import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/views/Layout";
import ArticleDetail from "@/views/ArticleDetail";
import Article from "@/views/Article";
import Collocation from "@/views/Collocation";
import Like from "@/views/Like";
import User from "@/views/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect:'/article',
    children:[
      {
        path: '/article',
        name: 'article',
        component: Article,
      },
      {
        path: '/collocation',
        name: 'collocation',
        component: Collocation,
      },
      {
        path: '/like',
        name: 'like',
        component: Like,
      },
      {
        path: '/user',
        name: 'user',
        component: User,
      }
    ]
  },
  {
    path:'/detail/:id',
    name:'articleDetail',
    component: ArticleDetail
  }
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/AboutView.vue')
  }*/
]

const router = new VueRouter({
  routes
})

export default router
