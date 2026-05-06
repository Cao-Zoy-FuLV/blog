<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPath = ref(route.path)

watch(() => route.path, (newPath) => {
  currentPath.value = newPath
})
</script>

<template>
  <div class="app-container">
<!--    <nav class="nav-bar">-->
<!--      <router-link -->
<!--        to="/cv" -->
<!--        class="nav-link"-->
<!--        :class="{ active: currentPath === '/cv' }"-->
<!--      >-->
<!--        简历版本1-->
<!--      </router-link>-->
<!--      <router-link -->
<!--        to="/cv1" -->
<!--        class="nav-link"-->
<!--        :class="{ active: currentPath === '/cv1' }"-->
<!--      >-->
<!--        简历版本2-->
<!--      </router-link>-->
<!--    </nav>-->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  position: relative;
}

/* 背景样式 */
.app-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(-45deg, #f0f9ff, #ecfdf5, #eff6ff, #fef3c7, #faf5ff, #f0f9ff);
  background-size: 400% 400%;
  z-index: -1;
  pointer-events: none;
  animation: gradientFlow 45s ease infinite;
  opacity: 0.5;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.nav-bar {
  display: flex;
  gap: 0;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.nav-link {
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  cursor: pointer;
}

.nav-link:hover {
  color: #2563eb;
  background: #f8fafc;
}

.nav-link.active {
  color: #2563eb;
  border-bottom-color: #2563eb;
  background: #eff6ff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
