<script setup>
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
</script>

<template>
  <div class="skill-wrapper">
    <div class="skill-item" v-for="item in getTypeList()" :key="item.name">
      <img class="pic" :src="item.icon" :alt="item.name" />
      <div class="text">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:global(html) {
  --textColor: hsl(215.4 16.3% 46.9%);
  --hoverColor: hsl(210 40% 96.1%);
}
:global(html.dark) {
  --textColor: hsl(215 20.2% 65.1%);
  --hoverColor: hsl(217.2 32.6% 17.5%);
}

.skill-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

@media not all and (min-width: 1024px) {
  .skill-wrapper {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media not all and (min-width: 768px) {
  .skill-wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background-color: var(--hoverColor);
  }

  .pic {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
  }

  .text {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: var(--textColor);
  }
}
</style>
