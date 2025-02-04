<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { type } = defineProps({
  type: String
})

const programmingLanguages = [
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  {
    name: 'Rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg'
  },
  {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
  },
  {
    name: 'Dart',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg'
  }
]

const frameworks = [
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
  },
  {
    name: 'Vue',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  {
    name: 'Tauri',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tauri/tauri-original.svg'
  },
  {
    name: 'Electron',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg'
  },
  {
    name: 'Jquery',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'
  }
]

const tools = [
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    name: 'Web assembly',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wasm/wasm-original.svg'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  {
    name: 'Playwright',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg'
  },
  {
    name: 'Vite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'
  }
]

function getTypeList() {
  const map = {
    programmingLanguages,
    frameworks,
    tools
  }
  return map[type]
}

const { isDark } = useData()
const hoverColor = computed(() => {
  if (isDark.value) {
    return 'hover:bg-[#1e293b]'
  }
  return 'hover:bg-[#f1f5f9]'
})

const textColor = computed(() => {
  if (isDark.value) {
    return 'text-[#94a3b8]'
  }
  return 'text-[#64748b]'
})
</script>

<template>
  <div
    :id="isDark"
    class="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
    <div
      class="flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-colors"
      :class="hoverColor"
      v-for="item in getTypeList()"
      :key="item.name">
      <img class="w-12 h-12 object-contain" :src="item.icon" :alt="item.name" />
      <div class="text-sm text-center font-medium" :class="textColor">{{ item.name }}</div>
    </div>
  </div>
</template>
