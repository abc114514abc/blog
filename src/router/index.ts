import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/posts',
    name: 'blog-list',
    component: () => import('@/views/BlogListView.vue'),
  },
  {
    path: '/posts/:id',
    name: 'blog-post',
    component: () => import('@/views/BlogPostView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  // 旧地址 /blog 重定向到 /posts，避免收藏的链接失效
  { path: '/blog', redirect: '/posts' },
  { path: '/blog/:id', redirect: (to) => `/posts/${to.params.id}` },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router
