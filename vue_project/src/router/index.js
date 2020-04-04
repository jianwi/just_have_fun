import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xuexitong from "../views/xuexitong/Index";
import XuexitongHelp from "../views/xuexitong/Help";
import Daxuexi from "../views/daxuexijietu/Index";
import DaxuexiPic from "../views/daxuexijietu/Pic";
import WebRefrsh from "../views/web_refresh/Index";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/xuexitong/help',
    name: 'xuexitongHelp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: XuexitongHelp
  },
  {
    path: '/xuexitong',
    name: '学习通',
    component: Xuexitong

  },
  {
    path: '/daxuexi',
    name: '大学习',
    component: Daxuexi
  },
  {
    path: '/daxuexi/:ji/:qi',
    name: '大学习图片',
    component: DaxuexiPic
  },
  {
    path: '/web_refresh',
    name: '网页刷新器',
    component: WebRefrsh
  }
]

const router = new VueRouter({
  routes
})

export default router
