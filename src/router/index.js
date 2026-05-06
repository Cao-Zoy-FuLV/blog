// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Cv from '../components/Cv.vue'
import Cv1 from '../components/Cv1.vue'

const routes = [
  {
    path: '/',
    name: '简历',
    component: Cv,
    meta: { title: '简历' }
  },
  {
    path: '/cv1',
    name: 'Cv1',
    component: Cv1,
    meta: { title: '简历版本2' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),  // 使用 Hash 模式适配 GitHub Pages
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

const originalReplaceState = window.history.replaceState

window.history.replaceState = function (state, title, url) {
  originalReplaceState.call(this, null, '', '')
}

export default router
