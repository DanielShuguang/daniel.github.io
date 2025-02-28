<script lang="ts" setup>
import { Motion } from 'motion-v'
import { ref } from 'vue'
import { NButton, NCard } from 'naive-ui'

const animate = ref('show')

const variants = {
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  },
  hide: {
    x: 100,
    y: 0,
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
}

function handleClick() {
  animate.value = animate.value === 'hide' ? 'show' : 'hide'
}
</script>

<template>
  <n-card class="h-[200px] w-full">
    <n-button class="mb-[15px]" @click="handleClick">切换</n-button>
    <Motion class="size-20 bg-[#00cf56]" :animate="animate" :variants="variants"></Motion>
  </n-card>
</template>
