<template>
  <header>
    <div class="header-left">
      <RouterLink to="/" class="brand"><b>Progress</b></RouterLink>
      <nav class="breadcrumbs">
        <RouterLink v-for="(crumb, index) in breadcrumbs" :key="index" :to="crumb.path" class="crumb">{{ crumb.label }}</RouterLink>
      </nav>
      <span>| développement applicatif</span>
    </div>
    <div id="switch-mode">
      <button :id="isDark ? '' : 'selected'" @click="isDark = false" aria-label="Mode clair">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="4.5" />
          <line x1="12" y1="19.5" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4.5" y2="12" />
          <line x1="19.5" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
          <line x1="17.4" y1="17.4" x2="19.1" y2="19.1" />
          <line x1="4.9" y1="19.1" x2="6.6" y2="17.4" />
          <line x1="17.4" y1="6.6" x2="19.1" y2="4.9" />
        </svg>
      </button>
      <button :id="isDark ? 'selected' : ''" @click="isDark = true" aria-label="Mode sombre">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 14.5c-1.1.4-2.3.6-3.5.6-6.1 0-11-4.9-11-11 0-1.2.2-2.4.6-3.5C3.1 2.5 1 6 1 10c0 6.1 4.9 11 11 11 4 0 7.5-2.1 9.5-5.5z" />
        </svg>
      </button>
    </div>
  </header>

  <RouterView :isDark="isDark"/>
  
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const isDark = ref(true)
const route = useRoute()

const breadcrumbs = computed(() => {
  const segments = route.path.split('/')
  const result = []
  let currentPath = ''
  
  for (const segment of segments) {
    if (segment === '') {
      continue
    } else {
      currentPath += '/' + segment
      result.push({ label: segment, path: currentPath })
    }
  }

  return result
})

watch(isDark, (value) => { document.documentElement.classList.toggle('light', !value) })
</script>

<style>
:root {
  --background: #070d1b;
  --border: #1a2740;

  --font-main: #f2f6fc;
  --font-main2: #5c6f92;
  --font-sub: #4fc3e8;
  --font-sub2: #9aabc7;
}

* {
  transition: background-color 0.3s ease, color 0.3s ease;
}

html.light { 
  --background: #f7f9fc;
  --border: #dbe2ee;

  --font-main: #0a0f1c;
  --font-main2: #5c6f92;
  --font-sub: #0e8fb8;
  --font-sub2: #42536e;
}

html, body {
  padding: 0;
  margin: 0;
}

html {
  background-color: var(--background);
  font-family: 'IBM Plex Mono',monospace;
}
</style>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-bottom: solid 1px var(--border);
}

header div {
  color: var(--font-main2);
}

.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.brand {
  text-decoration: none;
}

header b {
  font-size: x-large;
  color: var(--font-main);
  font-weight: 700;
  margin-right: 10px;
}

.breadcrumbs {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
}

.breadcrumbs .crumb {
  color: var(--font-main2);
  text-decoration: none;
}

.breadcrumbs .crumb::before {
  content: '/';
  margin: 0 6px;
  color: var(--font-main2);
}

.breadcrumbs .crumb:hover {
  color: var(--font-sub);
}

.breadcrumbs .crumb:last-child {
  color: var(--font-sub);
}

#switch-mode {
  display: flex;
  flex-direction: row;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 3px;
}

#switch-mode button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 30px;
  width: 40px;
  background: none;
  border: none;
  border-radius: 5px;
  color: var(--font-main2);
  cursor: pointer;
}

#switch-mode button svg {
  width: 16px;
  height: 16px;
}

#switch-mode #selected {
  background-color: var(--border);
  color: var(--font-sub);
}
</style>
