<template>
  <section class="blog-post-page page-wrap">
    <router-link to="/posts" class="back-link">
      <span class="back-arrow">←</span> 返回日记本
    </router-link>

    <header v-if="currentPost" class="post-header kawaii-card">
      <span class="badge">No.{{ currentPost.id }}</span>
      <h1 class="post-header__title">{{ currentPost.title }}</h1>
      <p class="post-header__meta">🗓 {{ currentPost.date }} · {{ currentPost.summary }}</p>
    </header>

    <article class="blog-post markdown-body markdown-kawaii kawaii-card">
      <div v-html="renderedHtml"></div>
    </article>
  </section>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { findPostById } from '@/data/posts'
import { useMarkdown } from '@/composables/useMarkdown'
import 'github-markdown-css/github-markdown.css'
import '@/assets/styles/markdown-kawaii.css'

const route = useRoute()
const { renderedHtml, loadMarkdown, setMarkdown } = useMarkdown()

const currentPost = computed(() => findPostById(route.params.id))

watch(
  () => route.params.id,
  (routeId) => {
    if (!routeId) return

    const post = findPostById(routeId)
    if (!post) {
      setMarkdown('# 文章不存在 (´；ω；`)\n请从日记本列表进入，或检查链接是否正确。')
      return
    }

    loadMarkdown(`${post.file}.md`)
  },
  { immediate: true },
)
</script>

<style scoped>
.blog-post-page {
  padding-top: 1.5rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-light);
  background: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-pill);
  border: 2px solid var(--color-card-border);
  transition:
    transform var(--transition-bounce),
    color var(--transition-smooth),
    box-shadow var(--transition-smooth);
}

.back-link:hover {
  color: var(--color-primary-dark);
  transform: translateX(-4px);
  box-shadow: 0 4px 16px var(--color-shadow);
}

.back-arrow {
  transition: transform var(--transition-bounce);
}

.back-link:hover .back-arrow {
  transform: translateX(-4px);
}

.post-header {
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.post-header__title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 4vw, 1.85rem);
  color: var(--color-heading);
  margin: 0.75rem 0 0.5rem;
}

.post-header__meta {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

.blog-post {
  margin-top: 0;
}

@media (max-width: 640px) {
  .blog-post {
    padding: 1.25rem 1rem;
  }
}
</style>
