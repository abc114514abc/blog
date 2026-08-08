<template>
  <section class="about page-wrap">
    <h2 class="page-title">💫 关于作者</h2>
    <p class="page-subtitle">一只在代码世界里修行的萌系学徒</p>

    <div class="profile kawaii-card">
      <div class="avatar" aria-hidden="true">
        <span class="avatar-face">(๑•̀ㅂ•́)و✧</span>
        <span class="avatar-deco">✨</span>
      </div>

      <h3 class="profile-name">代码爱好者</h3>
      <p class="profile-bio">
        我是一个代码爱好者，致力于创建一个完整的前后端网站，也就是全栈。
        把这个博客打扮成粉粉嫩嫩的样子，是为了让学习也变得开心一点～
      </p>

      <ul class="skill-list">
        <li v-for="skill in skills" :key="skill" class="skill-item">
          {{ skill }}
        </li>
      </ul>

      <router-link to="/posts" class="btn-kawaii profile-cta">
        <span>📖</span> 去看看日记
      </router-link>
    </div>
  </section>
</template>

<script setup>
const skills = ['Vue 3', 'TypeScript', 'Pinia', 'Node', 'MySQL', '算法打卡']
</script>

<style scoped>
.profile {
  text-align: center;
  padding: 2.5rem 2rem;
  max-width: 520px;
  margin: 0 auto;
}

.avatar {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #ffe8f0, #e8f0ff);
  border-radius: 50%;
  border: 3px solid var(--color-card-border);
  box-shadow: 0 8px 24px var(--color-shadow);
}

.avatar-face {
  font-size: 2.5rem;
  line-height: 1;
}

.avatar-deco {
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 1.25rem;
  animation: twinkle 2s ease-in-out infinite;
}

.profile-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 0.75rem;
}

.profile-bio {
  color: var(--color-text-light);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.skill-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.skill-item {
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  background: linear-gradient(135deg, #fff5f9, #f0f4ff);
  border: 1px solid var(--color-card-border);
  border-radius: var(--radius-pill);
  transition: transform var(--transition-bounce);
}

.skill-item:hover {
  transform: scale(1.08) rotate(2deg);
}

.profile-cta {
  margin-top: 0.5rem;
}
</style>
