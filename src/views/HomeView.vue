<template>
  <section class="home page-wrap">
    <div class="hero kawaii-card">
      <div class="hero-mascot" aria-hidden="true">(◕‿◕✿)</div>
      <p class="hero-tag">Welcome · ようこそ</p>
      <h1 class="hero-title">萌系代码小屋</h1>
      <p class="hero-desc">
        记录 Vue、算法与全栈学习点滴的温柔小角落<br />
        粉蓝配色 · 软萌交互 · 像番剧片头一样治愈 ✨
      </p>

      <div class="hero-actions">
        <router-link to="/posts" class="btn-kawaii">
          <span>📖</span> 打开日记本
        </router-link>
        <router-link to="/about" class="btn-ghost">认识作者 →</router-link>
      </div>

      <div class="hero-chips">
        <span v-for="chip in chips" :key="chip" class="chip">{{ chip }}</span>
      </div>
      
    </div>
  </section>
</template>

<script setup>
const chips = ['Vue3', 'TypeScript', 'Markdown', '全栈修行中']
</script>

<style scoped>
.home {
  padding-top: 2.5rem;
}

.hero {
  text-align: center;
  padding: 3rem 2rem 2.5rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 200, 221, 0.35), transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(189, 224, 254, 0.35), transparent 50%);
  pointer-events: none;
}

.hero-mascot {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 12px rgba(255, 143, 171, 0.3));
}

.hero-tag {
  font-size: 0.85rem;
  color: var(--color-text-light);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 7vw, 3rem);
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-accent), var(--color-secondary));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  letter-spacing: 0.06em;
}

.hero-desc {
  color: var(--color-text-light);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 420px;
  margin: 0 auto 1.75rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.75rem;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
  border: 2px dashed var(--color-card-border);
  border-radius: var(--radius-pill);
  transition:
    background var(--transition-smooth),
    transform var(--transition-bounce);
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-2px);
  color: var(--color-primary-dark);
}

.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.chip {
  padding: 0.35rem 0.9rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  background: linear-gradient(135deg, #fff0f5, #f0f4ff);
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-card-border);
  transition: transform var(--transition-bounce);
}

.chip:hover {
  transform: scale(1.08) rotate(-2deg);
}
</style>
