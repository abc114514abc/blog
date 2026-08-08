<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <span class="logo-icon">🌸</span>
        <span class="logo-text">萌系代码小屋</span>
      </router-link>

      <nav class="nav">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
        >
          <span class="nav-emoji">{{ item.emoji }}</span>
          {{ item.label }}
        </router-link>
        <ThemeToggle />
      </nav>
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from '@/components/layout/ThemeToggle.vue'

const navItems = [
  { to: '/', label: '主页', emoji: '🏠' },
  { to: '/posts', label: '日记本', emoji: '📖' },
  { to: '/about', label: '关于', emoji: '💫' },
]
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.75rem 1.25rem;
  background: var(--color-header-bg);
  backdrop-filter: blur(16px);
  border-bottom: 2px solid var(--color-card-border);
  box-shadow: 0 4px 24px var(--color-shadow);
  transition:
    background 0.4s ease,
    border-color 0.4s ease;
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: transform var(--transition-bounce);
}

.logo:hover {
  transform: scale(1.05);
  color: inherit;
}

.logo-icon {
  font-size: 1.6rem;
  animation: float 3s ease-in-out infinite;
}

.logo-text {
  font-family: var(--font-display);
  font-size: 1.35rem;
  color: var(--color-heading);
  letter-spacing: 0.04em;
}

.nav {
  display: flex;
  gap: 0.5rem;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text-light);
  border-radius: var(--radius-pill);
  transition:
    background var(--transition-smooth),
    color var(--transition-smooth),
    transform var(--transition-bounce);
}

.nav-emoji {
  font-size: 1rem;
  transition: transform var(--transition-bounce);
}

.nav-link:hover {
  color: var(--color-primary-dark);
  background: rgba(255, 143, 171, 0.12);
  transform: translateY(-2px);
}

.nav-link:hover .nav-emoji {
  transform: scale(1.25) rotate(-8deg);
}

.nav-link.router-link-active {
  color: #fff;
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  box-shadow: 0 4px 14px var(--color-shadow);
}

@media (max-width: 520px) {
  .logo-text {
    font-size: 1.1rem;
  }

  .nav-link {
    padding: 0.45rem 0.7rem;
    font-size: 0.8rem;
  }

  .nav-link span:not(.nav-emoji) {
    display: none;
  }

  .nav-emoji {
    font-size: 1.2rem;
  }
}
</style>
